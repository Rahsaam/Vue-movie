<template>
  
    <div class="relative mx-auto w-full cursor-pointer" aria-selected="true">
        <img :src="src" alt="" class="w-full lg:h-full rounded-xl   h-28 object-cover">
        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                <span class="text-sm text-white">{{title}}</span>          
        </div>
    </div>
                    
</template>

<script setup>
    defineProps({
        src: String,
        title: String
    })
</script>

<style>

</style>