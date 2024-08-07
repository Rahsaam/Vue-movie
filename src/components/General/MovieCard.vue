<template>
    <router-link :to="{name: 'SingleMovie', params: {id: movie.id}}">
      <img class="w-[200px] h-[290px]" src="@/assets/spinner.gif" v-img="movieImage" alt="casts" />
      <ShortTextExpander :title="props.movie.title"/>
    </router-link>
  </template>
  
  <script setup>
  import { computed } from "vue"
  import { API_IMAGE_BASE_URL } from "@/components/ApiDetails/api-constant"
  import defaultImage from '@/assets/default-movie.png'
  import ShortTextExpander from '@/components/General/ShortTextExpander.vue'
  
  const props = defineProps(['movie'])
  
  const movieImage = computed(() => {
    if (props.movie.poster_path) {
      return `${API_IMAGE_BASE_URL}/w154/${props.movie.poster_path}`
    }
    return defaultImage;
  })
  </script>