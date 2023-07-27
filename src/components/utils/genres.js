import {client} from './client'
import {API_BASE_URL} from '@/components/ApiDetails/api-constant.js'

export async function getGenreNames(id) {
    let genreNames = []
    const response = await client(`${API_BASE_URL}3/genre/movie/list`)
    for(let genre of response.genres) {
        if (id.includes(genre.id)) {
            genreNames.push(genre.name)
        }
    }
    return genreNames;
}


export async function getWatchGenreNames(id) {
    let genreNames = []
    const response = await client(`${API_BASE_URL}3/genre/movie/list`)
    for(let genre of response.genres) {
        if (id.includes(genre.id)) {
            genreNames.push(genre.name)
        }
    }
    return genreNames;
}

export async function getGenreNamesSeries(id) {
    let seriesGenres = []
    const response = await client(`${API_BASE_URL}3/genre/tv/list`)
    for(let genre of response.genres) {
        if(id.includes(genre.id)) {
            seriesGenres.push(genre.name)
        }
    }
    return seriesGenres;
}


export async function getGenreNamesFavorite(id) {
    let favoriteGenres = []
    const response = await client(`${API_BASE_URL}3/genre/movie/list`)
    for(let genre of response.genres) {
        if(id.includes(genre.id)) {
            favoriteGenres.push(genre.name)
        }
    }
    return favoriteGenres;
}