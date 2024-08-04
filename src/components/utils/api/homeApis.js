import { fetchTrendMovies, fetchMovies, fetchUpcomings, fetchOldMovies, fetchTvShows, fetchSeries } from '@/components/utils/api/homeFetch';

export const fetchAllMoviesData = async () => {
  const [popularMovies, mainMovies, upComings, oldMovies, tvShows, series] = await Promise.all([
    fetchTrendMovies(),
    fetchMovies(),
    fetchUpcomings(),
    fetchOldMovies(),
    fetchTvShows(),
    fetchSeries(),
  ]);
  
  return { popularMovies, mainMovies, upComings, oldMovies, tvShows, series };
};