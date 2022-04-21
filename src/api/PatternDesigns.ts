import axios from 'axios'
import { PatternDesigns } from '../types'

export async function fetchPatternDesigns(): Promise<PatternDesigns[]> {
  return await axios
    .get('https://mimadre.herokuapp.com/patterndesign')
    .then((res) => res.data)
    .catch(console.log)
}

export async function fetchPatternDesignById(PatternDesign: string): Promise<PatternDesigns> {
  return await axios
    .get('hhttps://mimadre.herokuapp.com/patterndesign/' + PatternDesign)
    .then((res) => res.data)
    .catch(console.log)
}

export async function putPatternDesign(PatternDesign: PatternDesigns) {
  console.log(PatternDesign)
  await axios
    .put('https://mimadre.herokuapp.com/patterndesign', PatternDesign, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function postPatternDesign(PatternDesign: PatternDesigns) {
  console.log(PatternDesign)
  await axios
    .post('https://mimadre.herokuapp.com/patterndesign', PatternDesign, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(console.log)
}

export async function deletePatternDesign(PatternDesign: PatternDesigns) {
  await axios.delete('https://mimadre.herokuapp.com/patterndesign', { data: PatternDesign }).catch(console.log)
}
