<template>
  <div
    class="bg-cover bg-center bg-no-repeat h-screen bg-my-color-primary-gray flex justify-center items-center"
  >
    <div class="bg-my-color-dark-orange p-4 rounded-lg">
      <h3 class="text-white mb-6">are you sure?!</h3>
      <div class="flex flex-col">
        <button class="bg-yellow-400 rounded-lg p-1 my-4" @click="clearSession">yes i am sure</button>
        <router-link class="text-white border p-1 rounded-lg" :to="{name: 'home'}">Nah come on</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { LOGOUT } from '@/components/utils/keys'
import { useRouter } from 'vue-router'

const router = useRouter()
const logout = inject(LOGOUT)

function clearSession() {
    logout();
    router.replace({name: 'login'})
}
</script>

<style></style>
