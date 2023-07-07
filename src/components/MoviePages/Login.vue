<template>
  <div class="login-box bg-cover bg-center bg-no-repeat h-screen bg-my-color-dark-red flex justify-center items-center" >
        <div>
            <form class="shadow-4xl bg-black opacity-70 p-8 w-96 rounded-xl">
                <div class="flex flex-col mb-10">
                <label class="text-white mb-2 text-lg" for="username">Username:</label>
                <input class="input" 
                type="text" 
                id="username" 
                name="username" 
                placeholder="write your username"
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
                placeholder="write yor password"
                aria-required="true"
                >
                </div>
                <div>
                    <a href="main.html" class="btn">login</a>
                </div>
                <div class="mt-8">
                    <span class="text-white">if you do not have an account <a href="signUp.html" class="underline">sign up</a> now</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.login-box {
    background: url('../../assets/Movie-Wallpaper-HD-Free-download\ \(1\).jpg');
}
</style>