<template>
  <article class="w-25% mr-auto text-left">
    <h2 class="section-title">Hype</h2>
    <div class="flex justify-between mt-5 mx-auto flex-col md:items-center md:flex-row gap-y-2">
      <div class="flex items-center justify-between md:w-10 w-auto">
        <img
          src="https://icon-library.com/images/imdb-icon-png/imdb-icon-png-15.jpg"
          class="w-7 mr-2"
          alt=""
          srcset=""
        />
        <span class="font-extrabold text-white">{{ imdb }}/10</span>
      </div>
      <div class="flex items-center justify-between md:w-10 w-auto">
        <img src="@/assets/like-button-icon.png" class="w-8 mr-2" alt="" />
        <span class="font-extrabold text-white">97%</span>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  imdb: String
})
</script>

<style></style>
