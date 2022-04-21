import axios from 'axios'
import { Works } from '../types'

export async function fetchWorks(): Promise<Works[]> {
  return await axios
    .get('https://mimadre.herokuapp.com/work')
    .then((res) => res.data)
    .catch(console.log)
}

export async function fetchWorkById(Work: string): Promise<Works> {
  return await axios
    .get('hhttps://mimadre.herokuapp.com/work/' + Work)
    .then((res) => res.data)
    .catch(console.log)
}

export async function putWork(Work: Works) {
  console.log(Work)
  await axios
    .put('https://mimadre.herokuapp.com/work', Work, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function postWork(Work: Works) {
  console.log(Work)
  await axios
    .post('https://mimadre.herokuapp.com/work', Work, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function deleteWork(Work: Works) {
  await axios.delete('https://mimadre.herokuapp.com/work', { data: Work }).catch(console.log)
}
