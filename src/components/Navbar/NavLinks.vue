<template>
    <li class="hover:text-slate-300" aria-selected="true">
        <router-link active-class="active" :to="to">
            <span>{{ text }}</span>
        </router-link> 
    </li>
</template>

<script setup>
    defineProps({
        text: String,
        activeTab: String,
        to: String,
    })
</script>

<style>
    .active {
        color: rgb(250 204 21);
        font-weight: bold;
    }
</style>