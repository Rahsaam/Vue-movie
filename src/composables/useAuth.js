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

import { LOGIN, USER, LOGOUT } from '@/components/utils/keys'
import { computed, ref } from 'vue'
import { useFetch } from './useFetch'
const USER_ID = 'user_id'


export default function useAuth(app) {
  // const user = computed({
  //   get: () => JSON.parse(sessionStorage.getItem(USER_ID) || 'null'),
  //   set: (value) => sessionStorage.setItem(USER_ID, JSON.stringify(value))
  // })
  const user = ref(JSON.parse(sessionStorage.getItem(USER_ID) || 'null'));

  // CREATE TOKEN
async function createToken() {
  const { doFetch, data, error } = useFetch()
  await doFetch(`${API_BASE_URL}${API_VERSION}${CREATE_TOKEN_URL}`)
  if (!data.value.success) {
    throw Error('create token failed', error)
  }
  console.log('createEEEE', data.value.request_token)
  return data.value.request_token
}

// VALIDATE LOGIN
async function validateLogin(requestToken, username, password) {
  const { doFetch, data, error } = useFetch()
  await doFetch(
    `${API_BASE_URL}${API_VERSION}${VALIDATE_LOGIN_URL}`,
    { 'username': username, 'password': password, 'request_token': requestToken },
    'POST'
  )
  console.log('validateEEEEE', data)
  if (!data.value.success) {
    throw new Error(`validating login failed`, error)
  }
}

// CREATE SESSEION
async function createSession(requestToken) {
  const { doFetch, data, error } = useFetch()
  await doFetch(
    `${API_BASE_URL}${API_VERSION}${CREATE_SESSION_URL}`,
    { request_token: requestToken },
    'POST'
  )
  console.log('create sessionNNNN', data)
  if (!data.value.success) {
    throw new Error(`create session id `)
  }
  sessionStorage.setItem('session_id', data.value.session_id)
}

// USER ACCOUNT
async function userAccount() {
  const sessionId = sessionStorage.getItem('session_id')
  if (!sessionId) {
    throw new Error('there is no session id')
  }

  const params = new URLSearchParams()
  params.append('session_id', sessionId)
  const { doFetch, data, error } = useFetch()
  await doFetch(`${API_BASE_URL}${API_VERSION}${ACCOUNT_URL}?${params}`)
  console.log('getting userRRRR', data)
  if (!data.value.id) {
    throw new Error(`getting user info failed : ${data.status_message}`, error)
  }
  sessionStorage.setItem('user_id', data.id)
  return data
}

  async function login(username, password) {
    const requestToken = await createToken()
     await validateLogin(requestToken, username, password)
     await createSession(requestToken)

    user.value =  await userAccount()
    sessionStorage.setItem(USER_ID, JSON.stringify(user.value));
  }

  function logout() {
    sessionStorage.clear()
    user.value = null
}

  app.provide(USER, user)
  app.provide(LOGIN, login)
  app.provide(LOGOUT, logout)
}
