<template>
  <article class="border-my-color-pale-gray border-4 rounded-2xl p-3 mt-10">
                    <div class="w-full">
                        <h2 class="text-my-color-secodary-gray text-center">Old but gold</h2>
                    </div>
                    <div class="grid gap-4 grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 mt-4 ">
                        <div v-for="oldMovie in oldMovies" :key="oldMovie.id" class="relative mx-auto w-full cursor-pointer" aria-selected="true">
                            <img :src="oldMovie.img" alt="" class="w-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm text-white">{{ oldMovie.name }}</span>          
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <button class=" block mx-auto py-1 px-4 mt-4 border-2 border-my-color-custom-orange text-my-color-custom-orange rounded-xl hover:bg-my-color-custom-orange hover:text-black">see more</button>
                    </div>
                </article>
</template>

<script setup>
    defineProps(['oldMovies'])
</script>

<style>

</style>