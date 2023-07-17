<template>
    <div class="main-poster relative mx-auto h-100  max-w-screen-2xl w-full">
            <div class=" w-full h-full" :class="{movieAcive: 'border-2'}">
                <img :src="src" class="absolute left-0 top-0 w-full h-full z-10 object-cover">
                <div class="h-full w-full absolute top-0 left-0 right-0 mx-auto z-20 max-w-screen-2xl bg-gradient-to-t from-black to-my-color-dark-orange opacity-40"></div>
            </div>
            <div class="text-white w-full max-w-7xl mx-auto left-0 right-0 absolute bottom-16 px-5 z-20">
                <h2 class="font-bold text-3xl md:text-5xl uppercase">{{ title }}</h2>
                <div class="flex w-full justify-between  sm:py-4">
                        <button class="btn-primary">watch trailer <i class="fa-solid fa-play"></i></button>
                        <i class="fa-solid fa-angle-right text-xl md:text-3xl movie-box-icon-main"></i>
                </div>
            </div>
        </div>
</template>

<script setup>
defineProps(['src', 'title'])
</script>

<style scoped>
    .movieActive {
        border: 1px solid yellow;
    }
</style>