<template>
  <div class="red-box">
    <span class="-rotate-90 text-slate-400 uppercase text-sm font-bold opacity-60">length</span>
    <span class="text-2xl md:text-4xl text-white font-bold">{{length}} <span class="text-sm">min</span></span>
    <span class="w-6"></span>
</div>
</template>

<script setup>
defineProps(['length'])
</script>

<style>

</style>