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
import { fetchProducts, postProduct } from "../api";
import { Products} from "../types";
import { v4 as uuid } from "uuid";
import { EditProduct } from ".";

export default function ProductTable() {
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const [products, setProducts] = useState<Products[]>([]);

  const cookies = new Cookies();

  useEffect(() => {
    fetchProducts().then((data) => {
        setProducts([...data]);
    });
  }, []);

  type Data = typeof products;

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

    const sortedData = products.sort((a, b) => {
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
      sortData({ tableData: products, sortKey, reverse: sortOrder === "desc" }),
    [products, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  let idInput = useRef(null);
  let nameInput = useRef(null);
  let imageInput = useRef(null);

  async function createProduct() {
    await postProduct(
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

        <td className="createButton" onClick={createProduct}>Create</td>
      </tbody>

      <tbody>
        {sortedData().map((product) => {
          return (
            <tr key={product.id}>
              <td><p>{product.id}</p></td>
              <td><p>{product.name}</p></td>
              <td><p>{product.image}</p></td>
              <td><EditProduct {...product}/></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
