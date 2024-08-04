import {
  API_READ_ACCESS_TOKEN,
  API_BASE_URL,
  API_VERSION
} from '@/components/ApiDetails/api-constant.js'

import {
  CREATE_TOKEN_URL,
  VALIDATE_LOGIN_URL,
  CREATE_SESSION_URL,
  ACCOUNT_URL
} from '@/components/ApiDetails/endPoints'

import { useFetch } from '@/composables/useFetch.js'

// CREATE TOKEN
function createToken() {
  const { doFetch, data, error } = useFetch()
  doFetch(`${API_BASE_URL}${API_VERSION}${CREATE_TOKEN_URL}`)
  if (!data.success) {
    throw Error('create token failed', error)
  }
  console.log('createEEEE', data)
  return data.request_token
}

// VALIDATE LOGIN
function validateLogin(requestToken, username, password) {
  const { doFetch, data, error } = useFetch()
  doFetch(
    `${API_BASE_URL}${API_VERSION}${VALIDATE_LOGIN_URL}`,
    { username: username, password: password, request_token: requestToken },
    'POST'
  )
  console.log('validateEEEEE', data)
  if (!data.success) {
    throw new Error(`validating login failed : ${data.status_message}`, error)
  }
}

// CREATE SESSEION
function createSession(requestToken) {
  const { doFetch, data, error } = useFetch()
  doFetch(
    `${API_BASE_URL}${API_VERSION}${CREATE_SESSION_URL}`,
    { request_token: requestToken },
    'POST'
  )
  console.log('create sessionNNNN', data)
  if (!data.success) {
    throw new Error(`create session id : ${data.status_message}`)
  }
  sessionStorage.setItem('session_id', data.session_id)
}

// USER ACCOUNT
function userAccount() {
  const sessionId = sessionStorage.getItem('session_id')
  if (!sessionId) {
    throw new Error('there is no session id')
  }

  const params = new URLSearchParams()
  params.append('session_id', sessionId)
  const { doFetch, data, error } = useFetch()
  doFetch(`${API_BASE_URL}${API_VERSION}${ACCOUNT_URL}?${params}`)
  console.log('getting userRRRR', data)
  if (!data.id) {
    throw new Error(`getting user info failed : ${data.status_message}`, error)
  }
  sessionStorage.setItem('user_id', data.id)
  return data
}

export function login(username, password) {
  const requestToken = createToken()
  validateLogin(requestToken, username, password)
  createSession(requestToken)

  const userData = userAccount()
  console.log('user dataAAAAA', userData)
}
