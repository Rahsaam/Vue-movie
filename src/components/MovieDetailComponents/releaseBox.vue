<template>
  <div class="red-box">
    <span class="-rotate-90 text-slate-400 uppercase text-sm opacity-60">release</span>
    <span class="text-2xl md:text-4xl text-white font-bold">{{release}}</span>
    <span class="w-6"></span>
</div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
    year: String
})

const release = computed(() => new Date(props.year).getFullYear())
</script>

<style>

</style>