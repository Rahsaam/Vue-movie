import { ref, onMounted, onUnmounted } from 'vue';
import { fetchAllMoviesData } from '@/components/utils/api/homeApis.js';

export function useMovies() {
  const popularMovies = ref([]);
  const mainMovies = ref([]);
  const upComings = ref([]);
  const oldMovies = ref([]);
  const tvShows = ref([]);
  const series = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const movieActive = ref('');
  let counter = 0;
  let interval;

  const updateActiveMovie = () => {
    movieActive.value = popularMovies.value[counter++ % 6];
  };

  onMounted(async () => {
    try {
      const data = await fetchAllMoviesData();
      popularMovies.value = data.popularMovies;
      movieActive.value = popularMovies.value[counter];
      interval = setInterval(updateActiveMovie, 3000);
      mainMovies.value = data.mainMovies;
      upComings.value = data.upComings;
      oldMovies.value = data.oldMovies;
      tvShows.value = data.tvShows;
      series.value = data.series;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  });

  onUnmounted(() => {
    clearInterval(interval);
  });

  return { popularMovies, mainMovies, upComings, oldMovies, tvShows, series, loading, error, movieActive };
}