<template>
    <main class="container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto px-3 sm:p-0">
            <div class=" mt-14 flex items-center lg:w-70% w-full justify-between text-white">
                    <ul class="flex gap-x-3">
                    <li id="movies" class="text-lg font-bold scroll-mt-16"><a href="" class="hover:text-my-color-dark-orange transition">Movies</a></li>
                    <div class="border"></div>
                    <li id="series" class="text-lg font-bold scroll-mt-16"><a href="" class="hover:text-my-color-dark-orange transition">Series</a></li>
                </ul>
                <ul class="flex text-my-color-secodary-gray gap-x-3">
                    <li><a href="" class="hover:text-my-color-dark-orange transition">All</a></li>
                    <li><a href="" class="hover:text-my-color-dark-orange transition">Newest</a></li>
                    <li><a href="" class="hover:text-my-color-dark-orange transition">Popular</a></li>
                </ul>
            </div>
            <main class="flex lg:flex-row flex-col ">
                <section class="lg:w-70% w-full grid grid-cols-2 items-end justify-center lg:grid-cols-1 md:grid-cols-5 sm:grid-cols-4 gap-x-2 lg:gap-x-0">
                    <movies 
                    v-for="mainMovie in mainMovies" 
                    :key="mainMovie.id"
                    :mediaType="mainMovie.media_type"
                    :language="mainMovie.original_language"
                    :title="mainMovie.original_title"
                    :overview="mainMovie.overview"
                    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${mainMovie.poster_path}`"
                    :release-date="mainMovie.release_date"
                    :imdb="mainMovie.vote_average"
                    :rating="mainMovie.vote_count"
                    casts="Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden"/>
                </section>
                
                <div class="lg:w-1/3 w-full lg:ml-5">
                    <aside-bar 
                    :data="movieList"
                    :oldMovies="oldMovies"
                    :tvShows="tvShows"/>
                </div>
            </main>
    </main>
</template>

<script setup>
    import asideBar from './AsideBar.vue'
    import movies   from '../MainMovies/Movies.vue'
    import {API_IMAGE_BASE_URL, API_IMAGE_SIZE} from '../ApiDetails/api-constant';
    defineProps(['mainMovies'])

   
    
</script>

<style>

</style>