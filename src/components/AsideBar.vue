<template>
  <aside class="ml-auto md:flex md:flex-col rounded-xl lg:w-25% lg:mt-0 mt-10 w-full relative">
                <coming-soon :data="data"/>
                <old-moviess :oldMovies="oldMovies"/>
                <tv-showss :tvShows="tvShows"/>
                
                
                <article id="genere" class="border-my-color-pale-gray border-4 rounded-2xl p-3 mt-10 scroll-mt-16">
                    <div class="flex justify-between">
                        <h2 class="text-my-color-secodary-gray">Genere</h2>
                        <ul class="flex gap-x-2">
                            <li><a href="">Movies</a></li>
                            <li><a href="">Series</a></li>
                        </ul>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-4 mt-3 overflow-hidden">
                        <button class="genere-btn">action<i class="fas fa-skull text-3sm pl-1 "></i></button>
                        <button class="genere-btn">comedy<i class="fa-regular fa-face-grin-squint-tears text-3sm pl-1 "></i></button>
                        <button class="genere-btn">horror<i class="fa-solid fa-ghost text-3sm pl-1 "></i></button>
                        <button class="genere-btn">animation<i class="fas fa-robot text-3sm pl-1 "></i></button>
                        <button class="genere-btn">fantacy<i class="fa-solid fa-wand-sparkles text-3sm pl-1 "></i></button>
                        <button class="genere-btn">drama<i class="fa-regular fa-face-sad-cry text-3sm pl-1 "></i></button>
                    </div>
                </article>
            </aside>
</template>

<script setup>
import comingSoon from './Aside/ComingSoon.vue'
import oldMoviess  from './Aside/OldMovies.vue'
import tvShowss  from './Aside/TvShows.vue'
    defineProps(['data', 'oldMovies', 'tvShows'])
</script>

<style>

</style>