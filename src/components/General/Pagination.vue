<template>
  <ul class="text-white flex justify-center mt-8">
    <li class="p-2">
      <a href="#" @click.prevent="pageChanged(prevPage)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="(i, n) in moviesPages" :class="activePage(n)" class="p-2" :key="n">
      <a href="#" @click.prevent="pageChanged(n)">{{ n + 1 }}</a>
    </li>
    <li class="p-2">
      <a href="#" @click.prevent="pageChanged(nextPage)" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import Util from '@/components/utils/pagination.js'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: Number,
  itemsPerPage: Number,
  totalItems: Number,
  url: String,
  showPage: Number,
  movies: Array,
  visiblePages: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits('page-changed')

// let currentPage = ref(0)

const prevPage = computed(() => {
  return props.currentPage > 1 ? props.currentPage - 1 : 0
})

const nextPage = computed(() => {
  return props.currentPage < moviesPages.value - 1 ? props.currentPage + 1 : props.currentPage
})

const moviesPages = computed(() => {
  return props.movies / props.itemsPerPage
})

const lastPage = computed(() => {
  if (props.totalPages) {
    return props.totalPages
  } else {
    return props.totalItems % props.itemsPerPage === 0
      ? props.totalItems / props.itemsPerPage
      : Math.floor(props.totalItems / props.itemsPerPage) + 1
  }
})

const paginationRange = computed(() => {
  let start =
    props.currentPage - props.visiblePages / 2 <= 0
      ? 1
      : props.currentPage + props.visiblePages / 2 > lastPage.value
      ? Util.lowerBound(lastPage.value - props.visiblePages + 1, 1)
      : Math.ceil(props.currentPage - props.visiblePages / 2)
  let range = []
  for (let i = 0; i < props.visiblePages && i < lastPage.value; i++) {
    range.push(start + i)
  }
  return range
})

const pageChanged = (pageNum) => {
  emit('page-changed', pageNum)
}

const activePage = (pageNum) => {
  return props.currentPage === pageNum ? 'active' : ''
}
</script>
