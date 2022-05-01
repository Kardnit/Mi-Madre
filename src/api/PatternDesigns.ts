import axios from 'axios'
import { PatternDesigns } from '../types'

export async function fetchPatternDesigns(): Promise<PatternDesigns[]> {
  return await axios
    .get('https://mi-madre-7ps3n.ondigitalocean.app/patterndesign')
    .then((res) => res.data)
    .catch(console.log)
}

export async function fetchPatternDesignById(PatternDesign: string): Promise<PatternDesigns> {
  return await axios
    .get('https://mi-madre-7ps3n.ondigitalocean.app/patterndesign/' + PatternDesign)
    .then((res) => res.data)
    .catch(console.log)
}

export async function putPatternDesign(PatternDesign: PatternDesigns) {
  console.log(PatternDesign)
  await axios
    .put('https://mi-madre-7ps3n.ondigitalocean.app/patterndesign', PatternDesign, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function postPatternDesign(PatternDesign: PatternDesigns) {
  console.log(PatternDesign)
  await axios
    .post('https://mi-madre-7ps3n.ondigitalocean.app/patterndesign', PatternDesign, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function deletePatternDesign(PatternDesign: PatternDesigns) {
  await axios.delete('https://mi-madre-7ps3n.ondigitalocean.app/patterndesign', { data: PatternDesign }).catch(console.log)
}
