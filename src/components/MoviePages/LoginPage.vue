<template>
  <div class="login-box bg-cover bg-center bg-no-repeat h-screen bg-my-color-primary-gray flex justify-center items-center" >
        <div class="bg-yellow-600 p-4 rounded-3xl">
            <h1 class="text-white text-center font-bold text-4xl">login</h1>
            <form @submit.prevent="sigin" class="shadow-4xl p-8 w-96 rounded-xl">
                <div class="flex flex-col mb-10">
                <label class="text-white mb-2 text-lg" for="username">Username:</label>
                <input class="input" 
                type="text" 
                id="username" 
                name="username" 
                v-model="username"
                aria-invalid="true"
                aria-describedby="username-desc"
                aria-disabled="true"
                aria-label="Username"
                >
                </div>
                <div class="flex flex-col mb-8">
                <label class="text-white mb-2 text-lg" for="password">Password:</label>
                <input class="input" 
                type="password" 
                id="password" 
                name="password" 
                v-model="password"
                aria-required="true"
                >
                </div>
                <div class="flex justify-center">
                    <button class="btn">login</button>
                </div>
                <div class="mt-8">
                    <span class="text-white">if you do not have an account <a
          href="https://www.themoviedb.org/signup"
          class="underline"
          >Sign Up</a
        > now</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref } from "vue";
import { useRouter } from "vue-router";
import { inject } from 'vue'
import { LOGIN } from '@/components/utils/keys';

const login = inject(LOGIN)
const username = ref('')
const password = ref('')
const router = useRouter()
 async function sigin() {
    try {
     await login(username.value, password.value)
     .then(() => {
      router.replace("/");
    })
} catch(error) {
      console.error("Login failed:", error);
    };
}

</script>

<style>

</style>