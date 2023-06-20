<template>
    <main class="container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto px-3 sm:p-0">
            <div class=" mt-14 flex items-center lg:w-70% w-full justify-between text-white">
                    <ul class="flex gap-x-3">
                    <li id="movies" class="text-lg font-bold scroll-mt-16"><a href="" class="hover:text-my-color-dark-orange transition">Movies</a></li>
                    <div class="border"></div>
                    <li id="series" class="text-lg font-bold scroll-mt-16"><a href="" class="hover:text-my-color-dark-orange transition">Series</a></li>
                </ul>
                <ul class="flex text-my-color-secodary-gray gap-x-3">
                    <li><a href="" class="hover:text-my-color-dark-orange transition">All</a></li>
                    <li><a href="" class="hover:text-my-color-dark-orange transition">Newest</a></li>
                    <li><a href="" class="hover:text-my-color-dark-orange transition">Popular</a></li>
                </ul>
            </div>
            <main class="flex lg:flex-row flex-col ">
                
                <section class="lg:w-70% w-full grid grid-cols-2 items-end justify-center lg:grid-cols-1 md:grid-cols-5 sm:grid-cols-4 gap-x-2 lg:gap-x-0">
                    <article v-for="movie in data" :key="movie.id" 
                    class="flex lg:flex-row flex-col lg:mt-14 mt-4">
                        <div class="relative lg:w-72 text-white">
                                <i class="fas fa-bookmark absolute top-2 left-2 z-20"></i>
                            <img :src="movie.img" class="w-full rounded-2xl" alt="">
                            <div class=" text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  lg:w-full h-full   overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                                <i class="fas fa-play"></i>          
                            </div>
                        </div>
                        <div class="lg:ml-3 p-2 w-full ">
                            <div class="flex justify-between w-full font-bold">
                                <h2 class="text-white">{{ movie.name }}</h2>
                                <span class="hidden lg:block text-white"><span class="text-yellow-500 font-bold text-2xl">8.4</span>/10</span>
                            </div>
                            <div class="flex mt-4">
                                <small class="text-my-color-hover-gray text-2sm hidden lg:block">{{movie.product}}</small>
                            </div>
                            <div class="gap-x-4 mt-4 hidden lg:flex text-white">
                                <span class="border-2 py-2 px-3 rounded-full flex" v-for="genere in movie.genere" :key="genere">{{genere}}</span>
                            </div>
                            <div class="mt-4 border-b-2 border-my-color-secodary-gray pb-2 hidden lg:block">
                                <div class="text-sm">
                                    <span class="text-my-color-hover-gray">rated:</span>
                                    <span class="ml-3 text-white">{{movie.liked}}<i class="fas fa-heart"></i></span>
                                </div>
                                <div class="text-sm mt-2">
                                    <span class="text-my-color-hover-gray">Director:</span>
                                    <span class="ml-3 text-sm text-blue-500">{{ movie.director }}</span>
                                </div>
                                <div class="text-sm mt-2">
                                    <span class="text-my-color-hover-gray">Casts:</span>
                                    <span class="ml-3 text-2sm text-blue-500">{{movie.casts}}</span>
                                </div>
                            </div>
                            <div class="border-b border-my-color-secodary-gray pb-1 hidden lg:block">
                                <span class="desc-movie text-white text-3sm">{{movie.desc}}</span>
                                <a href="" class="text-yellow-500 text-2sm">more</a>
                            </div>
                        </div>
                    </article>
                </section>
                <div class="lg:w-1/3 w-full">
                    <aside-bar :data="movielist"/>
                </div>
            </main>
    </main>
</template>

<script setup>
    import asideBar from './AsideBar.vue'
    defineProps(['data'])

    import movie1 from '../assets/movie-1.png';
    import movie2 from '../assets/movie-2.png';
    import movie3 from '../assets/movie-3.png';
    import movie4 from '../assets/movie-4.png';
    import movie5 from '../assets/movie-5.png';
    import movie6 from '../assets/movie-6.png';
    import movie7 from '../assets/movie-7.png';
    import movie8 from '../assets/movie-8.png';

    const movielist = [
        {
            img: movie1,
            imdb: 8.2,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "90%",
            name: "Sonic",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 1
        },
        {
            img: movie2,
            imdb: 7.2,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "85%",
            name: "Morbius",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 2
        },
        {
            img: movie3,
            imdb: 7.6,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "92%",
            name: "Adam project",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 3
        },
        {
            img: movie4,
            imdb: 7.9,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "92%",
            name: "Free guy",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 4
        },
        {
            img: movie5,
            imdb: 7.7,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "88%",
            name: "Batman",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 5
        },
        {
            img: movie6,
            imdb: 7.8,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "87%",
            name: "Unchrted",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 6
        },
        {
            img: movie7,
            imdb: 7.8,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "87%",
            name: "Unchrted",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 6
        },
        {
            img: movie8,
            imdb: 7.8,
            genere: [
                'Comedy',
                'Family',
                'Fantacy'
            ],
            liked: "87%",
            name: "Unchrted",
            director: "Alen delon",
            casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
            product: "movie - America - 1h30min",
            id: 6
        },
    ]
    
</script>

<style>

</style>