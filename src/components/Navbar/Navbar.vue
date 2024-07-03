<template>
<div class="max-w-screen-2xl mx-auto">
  <nav class="fixed top-0 left-0 right-0 max-w-screen-2xl p-2 z-50 w-full flex justify-between items-center bg-my-color-primary-gray">
            <h1 class="text-2xl text-white"><span class="text-yellow-400 font-extrabold text-3xl">M</span>OvieZ<span class="font-extrabold text-3xl text-yellow-400">Z</span></h1>
            <ul class="hidden md:flex space-x-7 text-white" aria-haspopup="menu" aria-expanded="false" aria-controls="menuContent">
                <nav-link v-if="user" text="Logout" to="/logout"/>
                <nav-link v-if="!user" text="Login" to="/login"/>
                <nav-link  text="Home" to="/"/>
                <nav-link v-if="user" text="Profile" to="/profile"/>
                <nav-link v-if="user" text="Watchlist" to="/watchList"/>

            </ul>
            <!-- responsiv menu icon -->
            <div id="menuIcon" @click="toggleMenu" class="space-y-1 md:hidden cursor-pointer z-50" aria-selected="true">
                <div class="w-6 h-0.5 bg-white"></div>
                <div class="w-6 h-0.5 bg-white"></div>
                <div class="w-6 h-0.5 bg-white"></div>
            </div>
            <ul id="menu" v-if="showMenu" class="md:hidden bg-yellow-700 absolute z-40 top-0 left-0 w-full p-10 space-y-5 text-white text-center rounded-b-3xl" 
            aria-expanded="true"
            aria-controls="menu"
            aria-haspopup="menu">
            <nav-link v-if="user" text="Logout" to="/logout"/>
                <nav-link v-if="!user" text="Login" to="/login"/>
                <nav-link  text="Home" to="/"/>
                <nav-link v-if="user" text="Profile" to="/profile"/>
                <nav-link v-if="user" text="Watchlist" to="/watchList"/>
            </ul>
    </nav>
</div>
</template>

<script setup>
import { inject, ref } from "vue";
import { LOGIN } from '@/components/utils/keys'
import { USER } from '@/components/utils/keys'
import Searchbar from "@/components/General/Searchbar.vue";

const user = inject(USER)

    const showMenu = ref(false)
    const toggleMenu = () => {
        showMenu.value = !showMenu.value
    }
import navLink from '@/components/Navbar/NavLinks.vue'
</script>
