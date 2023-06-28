import axios from 'axios'
import {CompileFormData} from '../model'

export function createFormData(
  language_id: number,
  source_code: string,
  stdin: string,
): CompileFormData {
  return {
    language_id,
    // encode source code in base64
    source_code,
    stdin,
  }
}

export function compileHeaderOptions(formData: CompileFormData) {
  return {
    method: 'POST',
    url: process.env.NEXT_PUBLIC_RAPID_API_URL,
    params: {base64_encoded: 'true', fields: '*'},
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
    data: formData,
  }
}

export async function getCompileToken(headerOptions: any) {
  return await axios
    .request(headerOptions)
    .then(function (response) {
      console.log('res.data', response.data)
      const token = response.data.token
      return token
    })
    .catch(err => {
      let error = err.response ? err.response.data : err
      console.log(error.message)
      return false
    })
}
