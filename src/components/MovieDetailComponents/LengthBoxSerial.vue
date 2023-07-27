<template>
 <div class="red-box">
    <span class="-rotate-90 text-slate-400 uppercase text-sm font-bold opacity-60">Length</span>
    <span class="text-2xl md:text-4xl text-white font-bold">{{length}} seasons</span>
    <span class="w-6"></span>
</div> 
</template>

<script setup>

defineProps(['length'])

</script>

<style>

</style>