<template>
  <div class="text-white relative">
    <div class="relative min-w-[150px]" aria-selected="true">
      <img src="../images/movie-1.png" alt="" class="w-full h-full rounded-md" />
      <div
        class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
      >
        <span class="text-sm md:text-md">imdb: 8.4</span>
        <div class="like-box text-sm md:text-md">
          <i class="fas fa-heart"></i>
          <span>90%</span>
        </div>
      </div>
    </div>
    <span>Sonic</span>
  </div>
</template>

<script setup></script>

<style></style>
