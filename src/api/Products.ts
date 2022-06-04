import axios from "axios";
import { Products } from "../types";

export async function fetchProducts(): Promise<Products[]> {
  return await axios
    .get("https://mi-madre-7ps3n.ondigitalocean.app/product")
    .then((res) => res.data)
    .catch(console.log);
}

export async function fetchProductById(Product: string): Promise<Products> {
  return await axios
    .get("https://mi-madre-7ps3n.ondigitalocean.app/product/" + Product)
    .then((res) => res.data)
    .catch(console.log);
}

export async function putProduct(Product: Products, token: string) {
  console.log(Product);
  await axios
    .put("https://mi-madre-7ps3n.ondigitalocean.app/product", Product, {
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token},
    })
    .catch(console.log);
}

export async function postProduct(Product: Products, token: string) {
  console.log(Product);
  await axios
    .post("https://mi-madre-7ps3n.ondigitalocean.app/product", Product, {
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
    })
    .catch(console.log);
}

export async function deleteProduct(Product: Products, token: string) {
  await axios
    .delete("https://mi-madre-7ps3n.ondigitalocean.app/product", {
      data: Product, 
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token }
    })
    .catch(console.log);
}

function getHeaders(token: string) {
  return {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
}
