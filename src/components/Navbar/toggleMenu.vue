<template>
  <div
    id="menuIcon"
    @click="toggleMenu"
    class="space-y-1 md:hidden cursor-pointer z-50"
    aria-selected="true"
  >
    <div class="w-6 h-0.5 bg-white"></div>
    <div class="w-6 h-0.5 bg-white"></div>
    <div class="w-6 h-0.5 bg-white"></div>
  </div>
  <ul
    id="menu"
    v-if="showMenu"
    class="md:hidden bg-yellow-700 absolute z-40 top-0 left-0 w-full p-10 space-y-5 text-white text-center rounded-b-3xl"
    aria-expanded="true"
    aria-controls="menu"
    aria-haspopup="menu"
  >
    <nav-link v-if="user" text="Logout" to="/logout" />
    <nav-link v-if="!user" text="Login" to="/login" />
    <nav-link text="Home" to="/" />
    <nav-link v-if="user" text="Profile" to="/profile" />
    <nav-link v-if="user" text="Watchlist" to="/watchList" />
  </ul>
</template>

<script setup>
import { inject, ref, watch } from "vue";
import { USER } from '@/components/utils/keys'
import navLink from '@/components/Navbar/NavLinks.vue'

const user = inject(USER)

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>
