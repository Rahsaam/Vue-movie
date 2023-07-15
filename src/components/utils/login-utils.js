import {API_READ_ACCESS_TOKEN,
        API_BASE_URL, 
        API_VERSION } from '@/components/ApiDetails/api-constant.js'

import {CREATE_TOKEN_URL,
        VALIDATE_LOGIN_URL,
        CREATE_SESSION_URL,
        ACCOUNT_URL} from '@/components/ApiDetails/endPoints'

async function createToken (){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
        }
      };
      
      const response = await fetch(`${API_BASE_URL}${API_VERSION}${CREATE_TOKEN_URL}`, options)
       const data = await response.json()
        if(!data.success) {
            throw Error('create token failed')
        }
        console.log('create');
        return data.request_token
}

async function validateLogin(requestToken ,username, password){
        
const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
        },
        
         body: JSON.stringify({
             username: username,
             password: password,
             request_token: requestToken
      })
      };
      
      const response = await fetch(`${API_BASE_URL}${API_VERSION}${VALIDATE_LOGIN_URL}`, options)
      const data = await response.json()
        
        if(!data.success) {
                throw new Error('Authorizing the request token failed.')
        }     
}

async function createSession(requestToken){
        const options = {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json',
                  Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                },
                body: JSON.stringify({request_token: requestToken})
              };
              
             const response = await fetch(`${API_BASE_URL}${API_VERSION}${CREATE_SESSION_URL}`, options)
                const data = await response.json()
                if(!data.success) {
                        throw new Error('creating session failed')
                }
                sessionStorage.setItem('session_id', data.session_id)
}



async function userAccount() {
        const sessionId = sessionStorage.getItem('session_id')
        if(!sessionId) {
                throw new Error('there is no session id')
        }
        const params = new URLSearchParams()
        params.append('session_id', sessionId)
        const url = fetch(`${API_BASE_URL}${API_VERSION}${ACCOUNT_URL}?${params}`)
        const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjZjMDBlZWVmYzdlZTk0OWFmNGU2MDcyNTU2ZjZhOCIsInN1YiI6IjY0YTJjZDFlOGUyMGM1MDEwZDRlMTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZkW2-Er08cN1FMrSp1vVZIwbMwJc0QIyWQY1WxJrx7s'
                }
              };
        const response = await fetch(url, options)
        const data = await response.json()
        if (!data.id) {
            throw new Error('Getting user info failed.')
        }
        sessionStorage.setItem('user_id', data.id)
        return data
}




export async function login(username, password){
        const requestToken = await createToken()
        await validateLogin(requestToken, username, password)
        await createSession(requestToken)

        const userData = await userAccount()
        console.log('user data', userData);
}


