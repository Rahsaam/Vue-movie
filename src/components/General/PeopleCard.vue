<template>
  <router-link :to="{name: 'people', params: {id: person.id}}">
    <img class="w-[200px] h-[290px]" :src="imagePerson" alt="casts" />
    <p class="text-white">{{ props.person.name }}</p>
  </router-link>
</template>

<script setup>
import { computed } from "vue"
import { API_IMAGE_BASE_URL } from "@/components/ApiDetails/api-constant"
import defaultImage from '@/assets/profile_placeholder.png'

const props = defineProps(['person'])

const imagePerson = computed(() => {
  if (props.person.profile_path) {
    return `${API_IMAGE_BASE_URL}/w154/${props.person.profile_path}`
  }
  return defaultImage;
})
</script>
