<template>
  <article class="flex lg:flex-row flex-col lg:mt-14 mt-4">
            <div class="relative lg:w-72 text-white cursor-pointer">
                <router-link :to="{name: 'serialDetail', params: {id}}">
                    <i class="fas fa-bookmark absolute top-2 left-2 z-20"></i>
                    <img :src="src" class="w-full rounded-2xl" :alt="name">
                    <div class=" text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                        <i class="fas fa-play"></i>          
                    </div>
                </router-link>
            </div>
            <div class="lg:ml-3 p-2 w-full ">
                <div class="flex justify-between w-full font-bold">
                    <h2 class="text-white">{{ name }}</h2>
                    <span class="hidden lg:block text-white"><span class="text-yellow-500 font-bold text-2xl">{{imdb}}</span>/10</span>
                </div>
                <div class="flex mt-4">
                    <small class="text-my-color-hover-gray text-2sm hidden lg:block">{{ year }} ,{{language}}</small>
                </div>
                <div class="gap-x-4 mt-4 hidden lg:flex text-white">
                    <span class="border-2 py-2 px-3 rounded-full flex" v-for="genre in genreNames" :key="genre">{{genre}}</span>
                </div>
                <div class="mt-4 border-b-2 border-my-color-secodary-gray pb-2 hidden lg:block">
                    <div class="text-sm">
                        <span class="text-my-color-hover-gray">rated:</span>
                        <span class="ml-3 text-white">{{rating}}<i class="fas fa-heart"></i></span>
                    </div>
                    <div class="text-sm mt-2">
                        <span class="text-my-color-hover-gray">Casts:</span>
                        <span class="ml-3 text-2sm text-blue-500">{{casts}}</span>
                    </div>
                </div>
                <div class="border-b border-my-color-secodary-gray pb-1 hidden lg:block">
                    <span class="desc-movie text-white text-3sm">{{overview}}</span>
                    <a href="" class="text-yellow-500 text-2sm">more</a>
                </div>
            </div>
        </article>
</template>

<script setup>
import { computed, ref } from "vue"
import { getGenreNamesSeries } from "@/components/utils/genres";

const genreNames = ref([])
const props = defineProps({
 mediaType: String,
 language: String,
 name: String,
 overview: String,
 src: String,
 releaseDate: String,
 imdb: String,
 casts: String,
 rating: Number,
 generes: Array,
 id: Number
})
const res = getGenreNamesSeries(props.generes)
res.then(data => genreNames.value = data)
const year = computed(() => new Date(props.releaseDate).getFullYear())
</script>
