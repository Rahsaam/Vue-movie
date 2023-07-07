<template>
  <main-poster/>
  <middleNavbar/>
  <div class="md:h-32 h-16"></div>
  <section id="trend" class=" mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16">
            <div class="flex justify-between">
                <h2 class="text-yellow-400 text-2xl">Trend movies</h2>
                <button class="btn-secodary">more...</button>
            </div>
            <div class="w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5">
                <div class="flex flex-row space-x-3 mx-auto [&::-webkit-scrollbar]:hidden" v-if="popularMovies.length">
                    <trend-movies 
                    v-for="movie in popularMovies" 
                    :key="movie.id"
                    :rating="movie.vote_count"
                    :release-date="movie.release_date"
                    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_MD}${movie.poster_path}`"
                    :title="movie.original_title"
                    :imdb="movie.vote_average"/> 
                </div>
                <div v-else>
                    <sppiner/>
                  </div>
            </div>
  </section>
      <div v-if="mainMovies.length"> 
        <movie-list 
        :mainMovies="mainMovies"
        :upComings="upComings"
        :oldMovies="oldMovies"
        :tvShows="tvShows"
        :seriesContent="series"/>
      </div>
      <div class="text-white" v-else>
        <sppiner/>
      </div>
      <footer-content/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import trendMovies from '../dls/TrendMovies.vue';
import {API_IMAGE_BASE_URL, API_IMAGE_SIZE_MD} from '../ApiDetails/api-constant';
import mainPoster from '../dls/MainPoster.vue'
import sppiner from '../dls/Sppiner.vue'
import middleNavbar from '../dls/MiddleNavbar.vue'
import movieList from '../dls/MovieList.vue'
import footerContent from '../dls/FooterContent.vue'

// data arrays
const popularMovies = ref([])
const mainMovies = ref([])
const upComings = ref([])
const oldMovies = ref([])
const tvShows = ref([])
const series = ref([])

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjZjMDBlZWVmYzdlZTk0OWFmNGU2MDcyNTU2ZjZhOCIsInN1YiI6IjY0YTJjZDFlOGUyMGM1MDEwZDRlMTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZkW2-Er08cN1FMrSp1vVZIwbMwJc0QIyWQY1WxJrx7s'
  }
};

const fetchTrendMovies = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    if (!response.ok) {
      throw new Error('This URL does not exist');
    }
    const data = await response.json();
    popularMovies.value = data.results;
  } catch (err) {
    console.error(err);
  }
};


 const fetchMovies = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    if (!response.ok) {
      throw new Error('This URL does not exist');
    }
    const data = await response.json();
    // mainMovies.value = data.results;

    const genereResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const genereData = await
     genereResponse.json()
    
    const genreMap = {};
    genereData.genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });
    

    // Assign genre names to each movie
    const moviesWithGenres = data.results.map(movie => {
      const genreNames = movie.genre_ids.map(genreId => genreMap[genreId]);
      return {
        ...movie,
        genre_names: genreNames,
      };
    });
    
    mainMovies.value = moviesWithGenres;
    
  } catch (err) {
    console.error(err);
  }
};


const fetchUpcomings = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    if(!response.ok) {
      throw new Error('This URL does not exist')
    }
    const data = await response.json();
    upComings.value = data.results
    // console.log(data);
  } catch(err) {
    console.log(err);
  }
};


const fetchOldMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    if(!response.ok) {
      throw new Error('This URL does not exist')
    }
    const data = await response.json()
    // console.log(data.results);
    oldMovies.value = data.results
  } catch(err) {
    console.log(err);
  }
}


const fetchTvShows = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    if(!response.ok) {
      throw new Error('This URL does not exist')
    }
    const data = await response.json()
    tvShows.value = data.results
    console.log(tvShows.value);
  } catch(err) {
    console.log(err);
  }
}


const fetchSeries = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    if (!response.ok) {
      throw new Error('This URL does not exist');
    }
    const data = await response.json();
    

    const genereResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const genereData = await
     genereResponse.json()
    
    const genreMap = {};
    genereData.genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });
    

    // Assign genre names to each movie
    const moviesWithGenres = data.results.map(movie => {
      const genreNames = movie.genre_ids.map(genreId => genreMap[genreId]);
      return {
        ...movie,
        genre_names: genreNames,
      };
    });
   console.log(moviesWithGenres);
    series.value = moviesWithGenres;
    
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchTrendMovies();
  fetchMovies();
  fetchUpcomings();
  fetchOldMovies();
  fetchTvShows();
  fetchSeries()
});

</script>

<style>

</style>