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
                    <span class="text-white">if you do not have an account <a href="signUp.html" class="underline">sign up</a> now</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { login } from "@/components/utils/login-utils";
const username = ref('')
const password = ref('')
 function sigin() {
     login(username.value, password.value)
}
</script>

<style>

</style>