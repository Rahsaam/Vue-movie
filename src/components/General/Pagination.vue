<template>
  <div class="flex justify-center mt-7">
    <button class="text-white pr-2">-</button>
    <button v-for="(item, index) in Array(5)" :key="index" class="border text-white px-2">{{ index + 1 }}</button>
    <button class="text-white pl-2">+</button>
  </div>
</template>

<script setup>
defineProps(['totalResults'])
</script>

<style>

</style>