<template>
  <router-link v-if="props.id" class="btn-primary" :to="{name: 'SingleMovie', params: { id: props.id }}">
    <slot></slot>
    <i v-if="props.icon" class="ml-3" :class="`fa-solid fa-${props.icon}`"></i>
    </router-link>
</template>

<script setup>
const props = defineProps({
    icon: String,
    id: Number
})
</script>

<style scoped>

</style>