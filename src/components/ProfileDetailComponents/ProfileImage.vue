<template>
  <div class="w-full md:w-52 mx-auto">
    <div class="bg-black mx-auto w-52 p-2 rounded-md">
      <img :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}/${avatar}`" class="rounded-md w-52" alt="" />
      <div class="text-white flex flex-col pt-4">
        <div class="flex items-center justify-between">
          <span class="text-zinc-50">{{ userName }}</span>
          <div>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
          </div>
        </div>
        <small class="pt-1">@hesam.rahmani.2023</small>
      </div>
      <a
        href="edit.html"
        class="text-white bg-my-color-dark-orange text-center mt-2 block p-1 rounded-lg"
        aria-selected="true"
        >Edit profile</a>
    </div>
  </div>
</template>

<script setup>
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_XLG,
  API_IMAGE_SIZE_2XLG,
  API_IMAGE_SIZE_MD
} from '@/components/ApiDetails/api-constant'
defineProps({
  avatar: String,
  userName: String
})

</script>


