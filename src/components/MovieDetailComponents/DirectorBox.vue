<template>
  <div class="red-box">
    <span class="-rotate-90 text-slate-400 uppercase text-sm font-bold opacity-60">Director</span>
    <span class="text-2xl md:text-3xl text-white">{{directorName}}</span>
    <span class="w-6"></span>
</div>
</template>

<script setup>
const props = defineProps(['directorName'])
console.log(props.directorName);


</script>

<style>

</style>