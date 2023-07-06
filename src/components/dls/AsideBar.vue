<template>
  <aside class="ml-auto md:flex md:flex-col rounded-xl lg:w-25% lg:mt-0 mt-10 w-full relative">
                <coming-soon :data="data"/>
                <old-moviess :oldMovies="oldMovies"/>
                <tv-showss :tvShows="tvShows"/>
                <generes/>
            </aside>
</template>

<script setup>
import comingSoon from '../Aside/ComingSoon.vue'
import oldMoviess  from '../Aside/OldMovies.vue'
import tvShowss  from '../Aside/TvShows.vue'
import generes from '../Aside/Generes.vue'
    defineProps(['data', 'oldMovies', 'tvShows'])
</script>

<style>

</style>