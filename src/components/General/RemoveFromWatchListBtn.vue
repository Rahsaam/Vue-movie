 <template>
   <div class="w-10 absolute flex items-center justify-between right-1 left-1 top-1 z-20">
    <button @click.prevent="removeFromWatchlist">
        <img 
            v-if="loading"
            src="@/assets/spinner.gif" 
            alt="remove btn"
            >
        <img 
            v-else-if="data.success" 
            src="@/assets/bookmark.png" 
            alt="remove btn"
            >
        <img 
            v-else 
            src="@/assets/bookmarked.png" 
            alt="remove btn"
            >
    </button>
   </div>
 </template>
 
 <script setup>
import { useFetch } from '@/composables/useFetch';
import { API_BASE_URL } from '@/components/ApiDetails/api-constant';
import { inject, watch } from 'vue';
import { USER } from '@/components/utils/keys'

const props = defineProps({
    media_type: String,
    media_id: String,
})
const emit = defineEmits(['remove'])
const user = inject(USER)

const {data, error, loading, doFetch} = useFetch();

function removeFromWatchlist () {
    doFetch(`${API_BASE_URL}/3/account/${user.value.id}/watchlist`, {'media_type': props.media_type, 'media_id': props.media_id, 'watchlist': false}, 'POST');
}

watch(data, () => {
    if(data.value.success) {
        emit('remove')
    }
})
 </script>
 
 <style>
 
 </style>