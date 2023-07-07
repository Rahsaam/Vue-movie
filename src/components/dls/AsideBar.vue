<template>
  <aside class="ml-auto md:flex md:flex-col rounded-xl lg:w-25% lg:mt-0 mt-10 w-full relative">
    <article class="border-my-color-pale-gray border-4 rounded-2xl p-3">
        <div class="flex justify-between">
            <h2 class="text-yellow-400">Comings</h2>
            <ul class="flex gap-x-2">
                <li><a href="">more</a></li>
            </ul>
        </div>
            <div class="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 gap-4 mt-3 overflow-hidden">
                <coming-soon 
                v-for="movie in upComings" 
                :key="movie.id"
                :title="movie.original_name"
                :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_MD}${movie.poster_path}`"/>
            </div>
    </article>


    <!-- old movies data -->
    <article class="border-my-color-pale-gray border-4 rounded-2xl p-3 mt-10">
        <div class="w-full">
            <h2 class=" text-center text-yellow-400">Old but gold</h2>
        </div>
        <div class="grid gap-4 grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 mt-4 ">
            <oldMoviesContent
            v-for="movie in oldMovies" 
            :key="movie.id" 
            :title="movie.original_title"
            :release="movie.release_date"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_MD}${movie.poster_path}`"/>
        </div>
            <div class="w-full">
                <button class=" block mx-auto py-1 px-4 mt-4 border-2 border-my-color-custom-orange text-my-color-custom-orange rounded-xl hover:bg-my-color-custom-orange hover:text-black">see more</button>
            </div>
    </article>

    <!-- tv shows -->
    <article class="border-my-color-pale-gray border-4 rounded-2xl p-3 mt-10">
        <div class="flex justify-between">
            <h2 class="text-yellow-400">Tv shows</h2>
            <ul class="flex gap-x-2">
                <li><a href="">more</a></li>
            </ul>
        </div>
        <div class="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-5  gap-4 mt-3 overflow-hidden">
            <tv-showss 
            v-for="movie in tvShows" 
            :key="movie.id"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_MD}${movie.poster_path}`"
            :title="movie.original_name"/>
        </div>
    </article>
        <generes/>
    </aside>
</template>

<script setup>
import comingSoon from '../Aside/ComingSoon.vue'
import oldMoviesContent  from '../Aside/OldMovies.vue'
import tvShowss  from '../Aside/TvShows.vue'
import generes from '../Aside/Generes.vue'
import {API_IMAGE_BASE_URL, API_IMAGE_SIZE_MD} from '../ApiDetails/api-constant';
    defineProps(['upComings', 'oldMovies', 'tvShows'])
</script>

<style>

</style>