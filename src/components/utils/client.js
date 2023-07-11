import {API_READ_ACCESS_TOKEN} from '../ApiDetails/api-constant'

export async function client(url, option = {}) {
   const fetchOptions = {
    method: 'GET',
    ...option,
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
        ...(option.headers ?? {})
    }
   }
   const response = await fetch(url, fetchOptions)
   const data = await response.json()
   if (!response.ok) {
       throw data
   }
   return data
}