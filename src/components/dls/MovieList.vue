<template>
    <main class="container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto px-3 sm:p-0">
            <div class=" mt-14 flex items-center lg:w-70% w-full justify-between text-white">
                    <ul class="flex gap-x-3">
                    <li id="movies" class="text-lg font-bold scroll-mt-16"><a href="" :class="{activeTab: activeTab === 'movies'}" @click.prevent="activeTab = 'movies'" class="hover:font-extrabold transition">Movies</a></li>
                    <div class="border"></div>
                    <li id="series" class="text-lg font-bold scroll-mt-16"><a href="" :class="{activeTab: activeTab === 'series'}" @click.prevent="activeTab = 'series'" class="hover:font-extrabold transition">Series</a></li>
                </ul>
                <ul class="flex text-my-color-secodary-gray gap-x-3">
                    <li><a href="" class="hover:text-my-color-dark-orange transition">All</a></li>
                    <li><a href="" class="hover:text-my-color-dark-orange transition">Newest</a></li>
                    <li><a href="" class="hover:text-my-color-dark-orange transition">Popular</a></li>
                </ul>
            </div>
            <main class="flex lg:flex-row flex-col ">
                <section v-if="activeTab === 'movies'" class="lg:w-70% w-full grid grid-cols-2 items-end justify-center lg:grid-cols-1 md:grid-cols-5 sm:grid-cols-4 gap-x-2 lg:gap-x-0">
                    <movies 
                    v-for="mainMovie in mainMovies" 
                    :key="mainMovie.id"
                    :id="mainMovie.id"
                    :mediaType="mainMovie.media_type"
                    :language="mainMovie.original_language"
                    :title="mainMovie.original_title"
                    :overview="mainMovie.overview"
                    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_LG}${mainMovie.poster_path}`"
                    :release-date="mainMovie.release_date"
                    :imdb="mainMovie.vote_average.toFixed(1)"
                    :rating="mainMovie.vote_count"
                    casts="Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden"
                    :genereNames="mainMovie.genre_names"/>
                </section>
                <section v-else class="lg:w-70% w-full grid grid-cols-2 items-end justify-center lg:grid-cols-1 md:grid-cols-5 sm:grid-cols-4 gap-x-2 lg:gap-x-0">
                    <series-content
                    v-for="serial in series"
                    :key="serial.id"
                    :id="serial.id"
                    :mediaType="serial.media_type"
                    :language="serial.original_language"
                    :name="serial.original_name"
                    :overview="serial.overview"
                    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_LG}${serial.poster_path}`"
                    :release-date="serial.first_air_date"
                    :imdb="serial.vote_average.toFixed(1)"
                    :rating="serial.vote_count"
                    casts="Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden"
                    :genereNames="serial.genre_names"/>
                </section>
                
                <div class="lg:w-1/3 w-full lg:ml-5">
                    <aside-bar 
                    :upComings="upComings"
                    :oldMovies="oldMovies"
                    :tvShows="tvShows"/>
                </div>
            </main>
    </main>
</template>

<script setup>
    import asideBar from '@/components/dls/AsideBar.vue'
    import movies   from '@/components/MainMovies/Movies.vue'
    import seriesContent  from '@/components/MainMovies/Series.vue'
    
    import {API_IMAGE_BASE_URL, API_IMAGE_SIZE_LG} from '../ApiDetails/api-constant';
import {ref, watch } from 'vue';
    defineProps(['mainMovies', 'upComings', 'oldMovies', 'tvShows', 'series'])

    const activeTab = ref('movies')


    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjZjMDBlZWVmYzdlZTk0OWFmNGU2MDcyNTU2ZjZhOCIsInN1YiI6IjY0YTJjZDFlOGUyMGM1MDEwZDRlMTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZkW2-Er08cN1FMrSp1vVZIwbMwJc0QIyWQY1WxJrx7s'
        }
    };

    watch(
        () => activeTab
        ,
        (newValue) => {
        const url = newValue === 'movies' ? 'movie' : 'tv';
        fetch(`https://api.themoviedb.org/3/trending/${url}/day?language=en-US`, options)
        }
        , 
        {immediate: true})
    
</script>

<style>
.activeTab {
    color: rgb(250 204 21);
    font-weight: bold;
}
</style>