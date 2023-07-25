<template>
<div class="max-w-screen-2xl mx-auto">
  <nav class="fixed top-0 left-0 right-0 max-w-screen-2xl p-2 z-50 w-full flex justify-between items-center bg-my-color-primary-gray">
            <h1 class="text-2xl text-white"><span class="text-yellow-400 font-extrabold text-3xl">M</span>OvieZ<span class="font-extrabold text-3xl text-yellow-400">Z</span></h1>
            <div class="flex">
                <label aria-hidden="true" class="opacity-0" for="searchMovie" id="searchMovie">search</label>
                <input class="border-2 border-r-0 border-red-900  rounded-l-xl outline-none bg-slate-900 md:w-40 opacity-60 text-white text-sm px-2 placeholder:italic placeholder:text-sm "
                 placeholder="Search movie..." 
                 type="text"
                 aria-label="Search"
                 name="searchMovie">
                <svg class="inline-block border-2 text-white border-red-900 w-7 rounded-r-lg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
            </div>
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

const user = inject(USER)

    const showMenu = ref(false)
    const toggleMenu = () => {
        showMenu.value = !showMenu.value
    }
import navLink from '@/components/Navbar/NavLinks.vue'
</script>
