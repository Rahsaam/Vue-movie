<template>
  <div class="h-100 w-full bg-my-color-primary-gray">
    
      <navbar/>

    <main-page/>
  </div>
</template>

<script setup>
    import mainPage from '@/components/MoviePages/MainPage.vue'
    import navbar from '@/components/dls/Navbar.vue'

    // movies data
    // import movie1 from './assets/movie-1.png';
    // import movie2 from './assets/movie-2.png';
    // import movie3 from './assets/movie-3.png';
    // import movie4 from './assets/movie-4.png';
    // import movie5 from './assets/movie-5.png';
    // import movie6 from './assets/movie-6.png';
    // import movie7 from './assets/movie-7.png';
    // import movie8 from './assets/movie-8.png';
    
    


    // const trendmovies = [
    //     {
    //         img: movie1,
    //         imdb: 8.2,
    //         genere: "Animation",
    //         liked: "90%",
    //         name: "Sonic",
    //         id: 1
    //     },
    //     {
    //         img: movie2,
    //         imdb: 7.2,
    //         genere: "Action",
    //         liked: "85%",
    //         name: "Morbius",
    //         id: 2
    //     },
    //     {
    //         img: movie3,
    //         imdb: 7.6,
    //         genere: "fantacy",
    //         liked: "92%",
    //         name: "Adam project",
    //         id: 3
    //     },
    //     {
    //         img: movie4,
    //         imdb: 7.9,
    //         genere: "Comedy",
    //         liked: "92%",
    //         name: "Free guy",
    //         id: 4
    //     },
    //     {
    //         img: movie5,
    //         imdb: 7.7,
    //         genere: "Action",
    //         liked: "88%",
    //         name: "Batman",
    //         id: 5
    //     },
    //     {
    //         img: movie6,
    //         imdb: 7.8,
    //         genere: "Action",
    //         liked: "87%",
    //         name: "Unchrted",
    //         id: 6
    //     },
    // ]


    // // movie list data
    // const movielist = [
    //     {
    //         img: movie1,
    //         imdb: 8.2,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "90%",
    //         name: "Sonic",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 1
    //     },
    //     {
    //         img: movie2,
    //         imdb: 7.2,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "85%",
    //         name: "Morbius",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 2
    //     },
    //     {
    //         img: movie3,
    //         imdb: 7.6,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "92%",
    //         name: "Adam project",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 3
    //     },
    //     {
    //         img: movie4,
    //         imdb: 7.9,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "92%",
    //         name: "Free guy",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 4
    //     },
    //     {
    //         img: movie5,
    //         imdb: 7.7,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "88%",
    //         name: "Batman",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 5
    //     },
    //     {
    //         img: movie6,
    //         imdb: 7.8,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "87%",
    //         name: "Unchrted",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 6
    //     },
    //     {
    //         img: movie7,
    //         imdb: 7.8,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "87%",
    //         name: "Unchrted",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 6
    //     },
    //     {
    //         img: movie8,
    //         imdb: 7.8,
    //         genere: [
    //             'Comedy',
    //             'Family',
    //             'Fantacy'
    //         ],
    //         liked: "87%",
    //         name: "Unchrted",
    //         director: "Alen delon",
    //         casts:"Jason statham, Adem sandler, Paul walker, Jim carry, Adam pally, Idris elba, Tika sumpter, Ben schwartz, James marsden",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet vitae officia, doloribus cum libero in. Magnam quia dicta reiciendis rerum quae beatae asperiores accusantium eveniet ipsam. Perferendis, molestias eum...",
    //         product: "movie - America - 1h30min",
    //         id: 6
    //     },
    // ]

    // // Old movies
    // const oldMovies = [
    //     {
    //         img: movie2,
    //         name: 'Morbius',
    //         id: 1
    //     },
    //     {
    //         img: movie4,
    //         name:'Free guy',
    //         id: 2
    //     },
    //     {
    //         img: movie6,
    //         name: 'Uncharted',
    //         id: 3
    //     },
    //     {
    //         img: movie8,
    //         name: 'kings men',
    //         id: 4
    //     }
    // ]


    // const tvShows = [
    //     {
    //         img: movie1,
    //         name: 'sonic',
    //         id: 1
    //     },
    //     {
    //         img: movie2,
    //         name: 'Morbius',
    //         id: 2
    //     },
    //     {
    //         img: movie3,
    //         name:'adam project',
    //         id: 3
    //     },
    //     {
    //         img: movie4,
    //         name:'free guy',
    //         id: 4
    //     },
    //     {
    //         img: movie6,
    //         name:'uncharted',
    //         id: 6
    //     },
    //     {
    //         img: movie7,
    //         name: 'Death nile',
    //         id: 7
    //     },
    //     {
    //         img: movie8,
    //         name: 'king men',
    //         id: 8
    //     },
    //     {
    //         img: movie5,
    //         name: 'batman',
    //         id: 5
    //     }
    // ]
   
 
</script>

<style scoped>

</style>