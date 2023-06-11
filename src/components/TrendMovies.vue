<template>
    <div class="md:h-32 h-16"></div>
  <section id="trend" class=" mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16">
            <div class="flex justify-between">
                <h2 class="text-yellow-400 text-2xl">Trend movies</h2>
                <button class="btn-secodary">more...</button>
            </div>
            <div class=" w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5">
            <div class="flex flex-row space-x-3 mx-auto [&::-webkit-scrollbar]:hidden">
                <div v-for="movie in data" :key="movie.id" class="text-white relative" aria-selected="true">
                    <div class="relative min-w-[150px] ">
                        <div class="absolute flex items-center justify-between left-2 right-2 top-1 z-20">
                            <img src="../assets/IMDB_Logo.png" class="w-10 h-4" alt="">
                            <span class="imdb-point">{{movie.imdb}}</span>
                        </div>
                        <img :src="movie.img" :alt="movie.name" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">{{ movie.genere }}</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>{{movie.liked}}</span>
                            </div>    
                        </div>
                    </div>
                    <span>{{movie.name}}</span>
                </div>
            </div>
            </div>
        </section>
</template>

<script setup>
    defineProps(['data'])
</script>

<style>

</style>