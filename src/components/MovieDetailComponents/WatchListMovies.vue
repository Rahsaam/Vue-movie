<template>
  <div class="text-white w-80% mx-auto relative mt-10">
    <removeFromWatchListBtn :media_id="id" media_type="movie" @remove="removeFromList" />
    <watchListMovieCard :genres="genres" :id="id" :src="src" :liked="liked" :title="title" />
  </div>
</template>

<script setup>
import removeFromWatchListBtn from '@/components/General/RemoveFromWatchListBtn.vue'
import watchListMovieCard from '@/components/WatchList/watchListMovieCard.vue'

const props = defineProps({
  src: String,
  genres: Array,
  title: String,
  liked: Number,
  release: String,
  id: Number
})

const emit = defineEmits(['removeFromWatch'])

function removeFromList() {
  emit('removeFromWatch')
}
</script>
