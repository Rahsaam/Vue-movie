import {API_READ_ACCESS_TOKEN} from '../ApiDetails/api-constant'

export async function client(url, options, method = 'GET') {
    
   const fetchOptions = {
    method: method,
    body : JSON.stringify(options),
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    }
   }
   const response = await fetch(url, fetchOptions)
//    console.log('response' , response.json());
   const data = await response.json()
   if (!response.ok) {
       throw data
   }
   return data

}