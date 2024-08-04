<template>
  <a 
    class="text-white" 
    :class="{'glass-btn': isGlassy, 'normal-btn': !isGlassy}"
    :style="{padding: `${px} ${py}`}">
    <div v-if="!isInWatchList.data.value.watchlist">
        <img 
            v-if="loading"
            class="w-6"
            src="@/assets/spinner.gif" 
            alt="loading">
        <img 
            v-else-if="data.success"
            class="w-6"
            src="@/assets/bookmarked.png" 
            alt="bookmarked">
        <img 
            v-else
            @click="addToWatchList"
            class="w-6"
            src="@/assets/bookmark.png" 
            alt="bookmark">
    </div>
    <div v-else>
        <img 
            class="w-6"
            src="@/assets/bookmarked.png" 
            alt="bookmarked">
    </div>
  </a>
</template>

<script setup>
import { API_BASE_URL, API_VERSION } from '@/components/ApiDetails/api-constant';
import { inject, onBeforeMount } from 'vue';
import { useFetch } from '@/composables/useFetch';
import { USER } from '@/components/utils/keys'
// const sessionId = sessionStorage.getItem('session_id')
const user = inject(USER)
const props = defineProps({
    isGlassy: Boolean,
    px: Number,
    py: Number,
    media_type: String,
    media_id: Number
})
const {data, error, loading, doFetch} = useFetch();

const isInWatchList = useFetch({})

onBeforeMount(() => {
    isInWatchList.doFetch(`${API_BASE_URL}${API_VERSION}/${props.media_type}/${props.media_id}/account_states`)
})

function addToWatchList() {
    doFetch(`${API_BASE_URL}${API_VERSION}/account/${user.value.id}/watchlist`, {'media_type': props.media_type, 'media_id': props.media_id, 'watchlist': true}, 'POST');
}


</script>

<style scoped>
    .glass-btn {
  /* From https://css.glass */
  background: rgba(31, 31, 31, 0.48);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.normal-btn {
    background-color: transparent;
}
</style>