<template>
    <article class="border-my-color-pale-gray border-4 rounded-2xl p-3">
        <div class="flex justify-between">
            <h2 class="text-yellow-400">Comings</h2>
            <ul class="flex gap-x-2">
                <li><a href="">more</a></li>
            </ul>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 gap-4 mt-3 overflow-hidden">
            <div v-for="movie in data" :key="movie.id" class="relative mx-auto w-full cursor-pointer" aria-selected="true">
                <img :src="movie.img" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                <div class="text-white text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                        <span class="text-sm">{{ movie.name }}</span>          
                </div>
             </div>
        </div>
    </article>
</template>

<script setup>
defineProps(['data'])
</script>

<style>

</style>