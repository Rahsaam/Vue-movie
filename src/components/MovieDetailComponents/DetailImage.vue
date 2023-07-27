<template>
   <div class="w-full h-full">
        <img class="h-full w-full absolute top-0 left-0 right-0 mx-auto object-cover bg-no-repeat max-w-screen-2xl" :src="src" :alt= "title">
        <div class="h-full w-full absolute top-0 left-0 right-0 mx-auto max-w-screen-2xl bg-gradient-to-b from-black to-black opacity-80"></div>
    </div>
    <div class=" absolute w-full max-w-7xl left-0 right-0 bottom-12 md:bottom-32 mx-auto px-3 sm:px-5">
        <p class="text-xl md:text-2xl text-gray-400 font-bold" v-for="actor in actorsName" :key="actor">{{ actor }}</p>
        <h2 class="font-bold text-xl mt-3 md:text-5xl sm:text-3xl uppercase text-white">{{ title }}</h2>
        <div class="flex justify-between w-full items-center mt-5 sm:mt-0">
            <div class="flex gap-3">
                <div v-for="genre in genres" :key="genre" class="flex  sm:py-4 space-x-7">
                    <span class="movie-feat">{{ genre.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    src:String,
    genres: Array,
    title: String,
    actorsName: Array
})
</script>