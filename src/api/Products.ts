import axios from 'axios'
import { Products } from '../types'

export async function fetchProducts(): Promise<Products[]> {
  return await axios
    .get('https://mi-madre-7ps3n.ondigitalocean.app/product')
    .then((res) => res.data)
    .catch(console.log)
}

export async function fetchProductById(Product: string): Promise<Products> {
  return await axios
    .get('https://mi-madre-7ps3n.ondigitalocean.app/product/' + Product)
    .then((res) => res.data)
    .catch(console.log)
}

export async function putProduct(Product: Products) {
  console.log(Product)
  await axios
    .put('https://mi-madre-7ps3n.ondigitalocean.app/product', Product, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function postProduct(Product: Products) {
  console.log(Product)
  await axios
    .post('https://mi-madre-7ps3n.ondigitalocean.app/product', Product, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function deleteProduct(Product: Products) {
  await axios.delete('https://mi-madre-7ps3n.ondigitalocean.app/product', { data: Product }).catch(console.log)
}
