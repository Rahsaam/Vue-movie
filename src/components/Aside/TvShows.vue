<template>
  <article class="border-my-color-pale-gray border-4 rounded-2xl p-3 mt-10">
                    <div class="flex justify-between">
                        <h2 class="text-yellow-400">Tv shows</h2>
                        <ul class="flex gap-x-2">
                            <li><a href="">more</a></li>
                        </ul>
                    </div>
                    <div class="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-5  gap-4 mt-3 overflow-hidden">
                        <div v-for="tvShow in tvShows" :key="tvShow.id" class="relative mx-auto w-full cursor-pointer" aria-selected="true">
                            <img :src="tvShow.img" alt="" class="w-full lg:h-full rounded-xl   h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm text-white">{{tvShow.name}}</span>          
                            </div>
                        </div>
                    </div>
                </article>
</template>

<script setup>
    defineProps(['tvShows'])
</script>

<style>

</style>