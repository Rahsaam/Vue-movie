<template>
  <aside class="ml-auto md:flex md:flex-col rounded-xl lg:w-25% lg:mt-0 mt-10 w-full relative">
                <coming-soon :data="data"/>
                
                <!-- <article class="border-my-color-pale-gray border-4 rounded-2xl p-3 mt-10">
                    <div class="flex justify-between">
                        <h2 class="text-yellow-400">Tv shows</h2>
                        <ul class="flex gap-x-2">
                            <li><a href="">more</a></li>
                        </ul>
                    </div>
                    <div class="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-5  gap-4 mt-3 overflow-hidden">
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-1.png" alt="" class="w-full lg:h-full rounded-xl   h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Sonic</span>          
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-2.png" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Morbius</span>         
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-3.png" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Adam project</span>          
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-4.png" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">free guy</span>         
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-5.png" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Batman</span>        
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-6.png" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class=" sm:text-2sm text-sm">Uncharted</span>         
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-7.png" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Death on nile</span>          
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-8.png" alt="" class="w-full lg:h-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Kings man</span>         
                            </div>
                        </div>
                    </div>
                </article> -->
                <article class="border-my-color-pale-gray border-4 rounded-2xl p-3 mt-10">
                    <div class="w-full">
                        <h2 class="text-my-color-secodary-gray text-center">Old but gold</h2>
                    </div>
                    <div class="grid gap-4 grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 mt-4">
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-1.png" alt="" class="w-full rounded-xl  h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Sonic</span>          
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-2.png" alt="" class="w-full rounded-xl h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Morbius</span>         
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-3.png" alt="" class="w-full rounded-xl h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">Adam project</span>          
                            </div>
                        </div>
                        <div class="relative mx-auto w-full" aria-selected="true">
                            <img src="../images/movie-4.png" alt="" class="w-full rounded-xl h-28 object-cover">
                            <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full  overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                    <span class="text-sm">free guy</span>         
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <button class=" block mx-auto py-1 px-4 mt-4 border-2 border-my-color-custom-orange text-my-color-custom-orange rounded-xl hover:bg-my-color-custom-orange hover:text-black">see more</button>
                    </div>
                </article>
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
    defineProps(['data'])
</script>

<style>

</style>