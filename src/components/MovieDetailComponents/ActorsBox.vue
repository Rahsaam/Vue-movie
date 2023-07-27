<template>
  <div class="flex flex-col items-center mr-6 md:mr-16">
        <img :src="src" class="w-16 rounded-full border" alt="">
        <span class="text-white text-sm whitespace-nowrap mt-3">{{ actorName }}</span>
    </div>
</template>

<script setup>
defineProps(['actorName', 'src'])
</script>

<style>

</style>