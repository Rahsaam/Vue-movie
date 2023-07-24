<template>
  
            <div class="relative mx-auto w-full cursor-pointer" aria-selected="true" @mouseover="showImageWithLargerSize" @mouseout="resetImageSize">
                <img :src="src" :alt="title" class="w-full rounded-xl  h-28 object-cover">
                <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                        <span class="text-sm text-white">{{ title }}</span>          
                        <span class="text-sm text-white">{{ year }}</span>          
                </div>
            </div>
                    
</template>

<script setup>
import { computed } from "vue"

   const props = defineProps({
        title: String,
        src: String,
        release: String
    })

    const year = computed(() => new Date(props.release).getFullYear())
</script>
