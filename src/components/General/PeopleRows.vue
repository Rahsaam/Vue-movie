<template>
  <div class="w-full text-center">
    <div class="flex justify-between mb-3 items-center">
      <h2 class="text-yellow-400 text-2xl">
        <slot name="title"></slot>
      </h2>
    </div>
    <div class="flex justify-between flex-wrap w-full">
      <div v-for="person in persons" :key="person.id">
        <people-card :person="person" />
      </div>
    </div>
      <slot name="pagination"></slot>
  </div>
</template>

<script setup>
import PeopleCard from '@/components/General/PeopleCard.vue'

defineProps(['persons'])
</script>
