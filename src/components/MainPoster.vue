<template>
    <div class="main-poster relative mx-auto max-w-screen-2xl h-full w-full">
            <div class=" w-full h-full">
                <div class="background-image absolute left-0 top-0 w-full h-full z-10"></div>
                <div class="h-full w-full absolute top-0 left-0 right-0 mx-auto z-20 max-w-screen-2xl bg-gradient-to-t from-black to-my-color-dark-orange opacity-40"></div>
            </div>
            <div class="text-white w-full max-w-7xl mx-auto left-0 right-0 absolute bottom-16 px-5 z-20">
                <p class="text-xl md:text-2xl">Jason Statham, Tom Hardey</p>
                <h2 class="font-bold text-3xl md:text-5xl uppercase">World war 2</h2>
                <div class="flex w-full justify-between  sm:py-4">
                        <button class="btn-primary">watch trailer <i class="fa-solid fa-play"></i></button>
                        <i class="fa-solid fa-angle-right text-xl md:text-3xl movie-box-icon-main"></i>
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
    .main-poster .background-image {
    background-image: url("../assets/hero-bg.jpg");
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }
</style>