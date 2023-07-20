import {API_READ_ACCESS_TOKEN,
    API_BASE_URL, 
    API_VERSION } from '@/components/ApiDetails/api-constant.js'

import {CREATE_TOKEN_URL,
    VALIDATE_LOGIN_URL,
    CREATE_SESSION_URL,
    ACCOUNT_URL} from '@/components/ApiDetails/endPoints'

import { LOGIN, USER } from '@/components/utils/keys'
import { computed } from 'vue'
const USER_ID = 'user_id'
export default function useAuth(app) {
    const user = computed({
        get: () => JSON.parse(sessionStorage.get(USER_ID) || 'null'),
        set: (value) => sessionStorage.setItem(USER_ID, JSON.stringify(value))
      })
      
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
            console.log('validate');
            if(!data.success) {
                    throw new Error(`validating login failed : ${data.status_message}`);
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
                    console.log('create session');
                    if(!data.success) {
                            throw new Error(`create session id : ${data.status_message}`);
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
            const url = `${API_BASE_URL}${API_VERSION}${ACCOUNT_URL}?${params}`
            const options = {
                    headers: {
                      accept: 'application/json',
                      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                    }
                  }
            const response = await fetch(url, options)
            const data = await response.json()
            console.log('getting user');
            if (!data.id) {
                    throw new Error(`getting user info failed : ${data.status_message}`);
            }
            sessionStorage.setItem('user_id', data.id)
            return data
        }
        
        
        
        
            async function login(username, password){
            const requestToken = await createToken()
            await validateLogin(requestToken, username, password)
            await createSession(requestToken)
        
            user.value = await userAccount()
        }

        app.provide(USER, user)
        app.provide(LOGIN, login)
}


