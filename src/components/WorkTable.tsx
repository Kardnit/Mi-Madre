import { randomUUID } from "crypto";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Cookies from "universal-cookie";
import { fetchWorks, postWork } from "../api";
import { Works } from "../types";
import { v4 as uuid } from 'uuid'

export default function WorkTable() {
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const [works, setWorks] = useState<Works[]>([]);

  const cookies = new Cookies();

  useEffect(() => {
    fetchWorks().then((data) => {
      setWorks([...data]);
    });
  }, []);

  type Data = typeof works;

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

    const sortedData = works.sort((a, b) => {
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
      sortData({ tableData: works, sortKey, reverse: sortOrder === "desc" }),
    [works, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  let idInput = useRef(null);
  let nameInput = useRef(null);
  let imageInput = useRef(null);

  async function createWork() {
    await postWork(
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
          <div className="create-form">Name</div>
          <input className="create-form-input" ref={nameInput} />
        </td>

        <td className="create-form-inputs">
          <div className="create-form">Image</div>
          <input className="create-form-input" ref={imageInput} />
        </td>

        <td onClick={createWork}>Create</td>
      </tbody>

      <tbody>
        {sortedData().map((work) => {
          return (
            <tr key={work.id}>
              <td>{work.id}</td>
              <td>{work.name}</td>
              <td>{work.image}</td>
              {/* <td><EditIngredient {...ingredient}/></td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
