import '../styles/Index.css'
import { randomUUID } from "crypto";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Cookies from "universal-cookie";
import { fetchPatternDesigns, postPatternDesign } from "../api";
import { PatternDesigns} from "../types";
import { v4 as uuid } from "uuid";
import { EditPatternDesign } from '.';

export default function PatternDesignTable() {
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const [patterndesigns, setPatternDesigns] = useState<PatternDesigns[]>([]);

  const cookies = new Cookies();

  useEffect(() => {
    fetchPatternDesigns().then((data) => {
        setPatternDesigns([...data]);
    });
  }, []);

  type Data = typeof patterndesigns;

  type SortKeys = keyof Data[0];

  type SortOrder = "ascn" | "desc";

  function sortData({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) {
    if (!sortKey) return tableData;

    const sortedData = patterndesigns.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  }

  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
    return (
      <button
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
        }`}
      >
        ▲
      </button>
    );
  }

  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "Id" },
    { key: "name", label: "Name" },
    { key: "image", label: "Image" },
  ];

  const sortedData = useCallback(
    () =>
      sortData({ tableData: patterndesigns, sortKey, reverse: sortOrder === "desc" }),
    [patterndesigns, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  let idInput = useRef(null);
  let nameInput = useRef(null);
  let imageInput = useRef(null);

  async function createPatternDesign() {
    await postPatternDesign(
      {
        id: uuid(),
        name: nameInput.current.value,
        image: imageInput.current.value,
      },
      cookies.get("jwt")
    );
    window.location.reload();
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
            return (
              <td key={row.key}>
                {row.label}{" "}
                <SortButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                />
              </td>
            );
          })}
        </tr>
      </thead>

      <tbody>
      <td className="create-form-inputs">
          <div className="create-form"></div>
        </td>
        
        <td className="create-form-inputs">
          <div className="create-form">Name</div>
          <input className="create-form-input" ref={nameInput} />
        </td>

        <td className="create-form-inputs">
          <div className="create-form">Image</div>
          <input className="create-form-input" ref={imageInput} />
        </td>

        <td className="createButton" onClick={createPatternDesign}>Create</td>
      </tbody>

      <tbody>
        {sortedData().map((patterndesign) => {
          return (
            <tr key={patterndesign.id}>
              <td><p>{patterndesign.id}</p></td>
              <td><p>{patterndesign.name}</p></td>
              <td><p>{patterndesign.image}</p></td>
              <td><EditPatternDesign {...patterndesign}/></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
