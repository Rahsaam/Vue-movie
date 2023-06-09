<template>
    <div class="md:h-32 h-16"></div>
  <section id="trend" class=" mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16">
            <div class="flex justify-between">
                <h2 class="text-yellow-400 text-2xl">Trend movies</h2>
                <button class="btn-secodary">more...</button>
            </div>
            <div class=" w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5">
            <div class="flex flex-row space-x-3 mx-auto [&::-webkit-scrollbar]:hidden">
                <div v-for="movie in trendMovies" :key="movie.id" class="text-white relative" aria-selected="true">
                    <div class="relative min-w-[150px] ">
                        <div class="absolute flex items-center justify-between left-2 right-2 top-1 z-20">
                            <img src="../assets/IMDB_Logo.png" class="w-10 h-4" alt="">
                            <span class="imdb-point">{{movie.imdb}}</span>
                        </div>
                        <img :src="movie.img" :alt="movie.name" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">{{ movie.genere }}</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>{{movie.liked}}</span>
                            </div>    
                        </div>
                    </div>
                    <span>{{movie.name}}</span>
                </div>
            </div>
            </div>
        </section>
</template>

<script setup>
    import movie1 from '../assets/movie-1.png';
    import movie2 from '../assets/movie-2.png';
    import movie3 from '../assets/movie-3.png';
    import movie4 from '../assets/movie-4.png';
    import movie5 from '../assets/movie-5.png';
    import movie6 from '../assets/movie-6.png';
    


    const trendMovies = [
        {
            img: movie1,
            imdb: 8.2,
            genere: "Animation",
            liked: "90%",
            name: "Sonic",
            id: 1
        },
        {
            img: movie2,
            imdb: 7.2,
            genere: "Action",
            liked: "85%",
            name: "Morbius",
            id: 2
        },
        {
            img: movie3,
            imdb: 7.6,
            genere: "fantacy",
            liked: "92%",
            name: "Adam project",
            id: 3
        },
        {
            img: movie4,
            imdb: 7.9,
            genere: "Comedy",
            liked: "92%",
            name: "Free guy",
            id: 4
        },
        {
            img: movie5,
            imdb: 7.7,
            genere: "Action",
            liked: "88%",
            name: "Batman",
            id: 5
        },
        {
            img: movie6,
            imdb: 7.8,
            genere: "Action",
            liked: "87%",
            name: "Unchrted",
            id: 6
        },
    ]
</script>

<style>

</style>