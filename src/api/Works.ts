import axios from "axios";
import { Works } from "../types";

export async function fetchWorks(): Promise<Works[]> {
  return await axios
    .get("https://mi-madre-7ps3n.ondigitalocean.app/work")
    .then((res) => res.data)
    .catch(console.log);
}

export async function fetchWorkById(Work: string): Promise<Works> {
  return await axios
    .get("https://mi-madre-7ps3n.ondigitalocean.app/work/" + Work)
    .then((res) => res.data)
    .catch(console.log);
}

export async function putWork(Work: Works, token: string) {
  console.log(Work);
  await axios
    .put("https://mi-madre-7ps3n.ondigitalocean.app/work", Work, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .catch(console.log);
}

export async function postWork(Work: Works, token: string) {
  console.log(Work);
  await axios
    .post("https://mi-madre-7ps3n.ondigitalocean.app/work", Work, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .catch(console.log);
}

export async function deleteWork(Work: Works, token: string) {
  await axios
    .delete("https://mi-madre-7ps3n.ondigitalocean.app/work", { 
      data: Work ,
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token }})
    .catch(console.log);
}
