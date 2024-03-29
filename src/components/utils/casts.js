import {client} from './client'
import {API_BASE_URL} from '@/components/ApiDetails/api-constant.js'

export async function getMovieActors(id) {
    try{
    const response = await client(`${API_BASE_URL}3/movie/${id}/credits`);
    const actorNames = response.cast.map((actor) => actor.name).slice(0, 10);

    return actorNames;
    } catch (err) {
        console.log(err);
    }
}
export async function getSeriesActors(id) {
    try{
    const response = await client(`${API_BASE_URL}3/tv/${id}/credits`);
    const actorNames = response.cast.map((actor) => actor.name).slice(0, 10);
    return actorNames;
    } catch (err) {
        console.log(err);
    }
}