import { client } from '@/components/utils/client'
import {
  API_BASE_URL,
  API_VERSION
} from '@/components/ApiDetails/api-constant'
import {
  TREND_MOVIES_URL,
  MOVIES_URL,
  UPCOMING_MOVIES_URL,
  OLD_MOVIES_URL,
  TVSHOWS_URL,
  SERIES_URL
} from '@/components/ApiDetails/endPoints'

export const fetchTrendMovies = async () => {
  const response = await client(`${API_BASE_URL}${API_VERSION}${TREND_MOVIES_URL}?language=en-US`)
  return response.results.slice(0, 6)
}

export const fetchMovies = async () => {
  const data = await client(`${API_BASE_URL}${API_VERSION}${MOVIES_URL}?language=en-US`)
  return data.results
}

export const fetchUpcomings = async () => {
  const data = await client(`${API_BASE_URL}${API_VERSION}${UPCOMING_MOVIES_URL}?language=en-US&page=1`)
  return data.results
}

export const fetchOldMovies = async () => {
  const data = await client(`${API_BASE_URL}${API_VERSION}${OLD_MOVIES_URL}?language=en-US&page=1`)
  return data.results
}

export const fetchTvShows = async () => {
  const data = await client(`${API_BASE_URL}${API_VERSION}${TVSHOWS_URL}?language=en-US`)
  return data.results
}

export const fetchSeries = async () => {
  const data = await client(`${API_BASE_URL}${API_VERSION}${SERIES_URL}?language=en-US`)
  return data.results
}