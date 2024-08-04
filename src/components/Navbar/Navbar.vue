<template>
<div class="max-w-screen-2xl mx-auto">
  <nav class="fixed top-0 left-0 right-0 max-w-screen-2xl p-2 z-50 w-full flex justify-between items-center bg-my-color-primary-gray">
            <router-link to="/"><h1 class="text-2xl text-white"><span class="text-yellow-400 font-extrabold text-3xl">M</span>OvieZ<span class="font-extrabold text-3xl text-yellow-400">Z</span></h1></router-link>
            <ul class="hidden md:flex space-x-7 text-white" aria-haspopup="menu" aria-expanded="false" aria-controls="menuContent">
                <nav-link v-if="user" text="Logout" to="/logout"/>
                <nav-link v-if="!user" text="Login" to="/login"/>
                <nav-link  text="Home" to="/"/>
                <nav-link v-if="user" text="Profile" to="/profile"/>
                <nav-link v-if="user" text="Watchlist" to="/watchList"/>

            </ul>
            <!-- responsiv menu icon -->
            <toggleMenu />
    </nav>
</div>
</template>

<script setup>
import { inject } from "vue";
import { USER } from '@/components/utils/keys'
import navLink from '@/components/Navbar/NavLinks.vue'
import toggleMenu from '@/components/Navbar/toggleMenu.vue'

const user = inject(USER)


</script>
