<template>
 <div class="w-full max-w-screen-2xl mx-auto">
    
    <navbar/>
    <main class="mt-28 max-w-6xl mx-auto px-4">
        <!-- prof pic & calender col -->
        <section class="flex flex-col w-full justify-between md:flex-row">
            <div class="w-full md:w-52 mx-auto">
                <div class="bg-black mx-auto w-52 p-2 rounded-md ">
                    <img src="../images/sample.jpg" class="rounded-md w-52" alt="">
                    <div class="text-white flex flex-col pt-4">
                        <div class="flex items-center justify-between">
                            <span class="text-zinc-50">Hesam</span>
                            <div>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                            </div>
                        </div>
                        <small class="pt-1">@hesam.rahmani.2023</small>
                    </div>
                        <a href="edit.html" class="text-white bg-my-color-dark-orange text-center mt-2 block p-1 rounded-lg" aria-selected="true">Edit profile</a>
                </div>
            </div>
            
            
            
            <div class="w-full mt-10 md:mt-0 flex flex-col items-center">
                <div class="w-80% md:ml-auto mt-4 bg-black p-3 rounded-3xl">
                    <h2 class="text-white text-left text-2xl mt-3">for you:</h2>
                    <div class="mt-4">
                        <div class="flex w-full justify-between">
                            <ul class="flex flex-col gap-y-2 justify-between w-full">
                                <li class="for-you-movie" aria-selected="true">
                                    <div class="flex items-center">
                                    <img src="../images/movie-2.png" class="w-10 md:h-auto rounded-full" alt="">
                                    <h6 class="ml-3">morbius</h6>
                                    </div>
                                    <div class="flex flex-col">
                                        <small>IMDB: 8.1</small> 
                                        <small>Action</small>
                                        <small>2023</small>
                                    </div>

                                </li>
                                <li class="for-you-movie" aria-selected="true">
                                    <div class="flex items-center">
                                    <img src="../images/movie-3.png" class="w-10 md:h-auto rounded-full" alt="">
                                    <h6 class="ml-3">Adam project</h6>
                                    </div>
                                    <div class="flex flex-col">
                                        <small>IMDB: 7.5</small> 
                                        <small>Action</small>
                                        <small>2022</small>
                                    </div>
                                </li>
                                <li class="for-you-movie" aria-selected="true">
                                    <div class="flex items-center">
                                    <img src="../images/movie-4.png" class="w-10 md:h-auto rounded-full" alt="">
                                    <h6 class="ml-3">Free guy</h6>
                                    </div>
                                    <div class="flex flex-col">
                                        <small>IMDB: 7.2</small> 
                                        <small>Action</small>
                                        <small>2022</small>
                                    </div>
                                </li>
                            </ul>
                            <div class="bg-my-color-hover-gray ml-2 rounded-tr-3xl cursor-pointer hover:bg-my-color-primary-gray">
                                <i class="fa-solid fa-angle-right mt-28 mx-5 text-white transition" aria-selected="true"></i>
                            </div>
                        </div>
                        <button class="text-my-color-primary-gray bg-my-color-hover-gray w-full h-12 mt-2 rounded-b-3xl" aria-selected="true">Change genere</button>
                    </div>
                </div> 
            </div>
        </section>
       
        <section class="flex mt-10 w-full flex-col md:flex-row">
            <article class="flex justify-center gap-x-3">
                <div class="bg-my-color-hover-gray text-white p-2 rounded-full text-center flex flex-col justify-center w-36" aria-selected="false">
                    <small>favourite genere</small>
                    <p class="text-lg font-bold">Action</p>
                </div>
                <div class="bg-my-color-hover-gray text-white p-2 rounded-full text-center flex flex-col justify-center w-36" aria-selected="false">
                    <small>watched</small>
                    <p class="text-xl font-bold">59H</p>
                </div>
                <div class="bg-my-color-hover-gray text-white p-2 rounded-full text-center flex flex-col justify-center w-36" aria-selected="false">
                    <small>Online</small>
                    <p class="text-xl font-bold">70H</p>
                </div>
            </article>
            <article class="flex flex-col ml-5 md:flex-row md:justify-between justify-center items-center mx-auto mt-5 md:mt-0 md:ml-6 w-full md:border-l">
                <div class="flex flex-col md:flex-row w-full items-center justify-center text-center gap-2 mx-auto">
                    <div class="bg-black rounded-2xl md:mr-0 mr-10 md:ml-2 p-2 text-white flex flex-col w-70% md:w-full cursor-pointer hover:bg-slate-900"
                     aria-selected="true">
                        <div class="flex justify-between w-full items-center">
                            <div class="mr-3"> 
                                <img src="../images/movie-6.png" class="w-10 h-10 rounded-full object-cover"  alt="">
                            </div>
                            <div>
                                <span class="whitespace-nowrap ml-auto">keep watching</span>
                            </div>
                        </div>
                        <div class="mt-2 w-full">
                            <span>1:34:21</span>
                                <div class="border-b w-full relative mt-1">
                                    <div class="absolute left-0 -top-1 bg-red-500 w-30% h-2 rounded-xl content-empty"></div>
                                </div>
                        </div>
                    </div>  
                    <div class="bg-black rounded-2xl p-2 md:mr-0 mr-10 md:max-w-6xl text-white flex flex-col w-70% md:w-full cursor-pointer hover:bg-slate-900"
                     aria-selected="true">
                        <div class="flex justify-between w-full items-center">
                            <div class="mr-3"> 
                                <img src="../images/movie-3.png" class="w-10 h-10 rounded-full object-cover"  alt="">
                            </div>
                            <div>
                                <span class="whitespace-nowrap ml-auto">keep watching</span>
                            </div>
                        </div>
                        <div class="mt-2 w-full">
                            <span>2:12:21</span>
                                <div class="border-b w-full relative mt-1">
                                    <div class="absolute left-0 -top-1 bg-red-500 w-50% h-2 rounded-xl content-empty"></div>
                                </div>
                        </div>
                    </div>  
                    
                    
                </div> 
            </article>
        </section>

        <!-- movies -->
        <section class=" mx-auto mt-14">
            <div class="flex justify-between">
                <h2 class="text-red-900 text-2xl">Watched</h2>
                <button class="btn-secodary">more...</button>
            </div>
            <div class=" w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5 lg:max-w-7xl">
            <div class="flex flex-row  space-x-3 w-[1200px] mx-auto [&::-webkit-scrollbar]:hidden">
                <div class="text-white relative" >
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-1.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Sonic</span>
                </div>
                <div class="text-white relative" >
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-2.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>morbius</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-3.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Adam project</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-4.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Free Guy</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-5.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Batman</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-6.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Uncharted</span>
                </div>
                
            </div>
            </div>
        </section>
        <section class=" mx-auto mt-14">
            <div class="flex justify-between">
                <h2 class="text-red-900 text-2xl">Favourite</h2>
                <button class="btn-secodary">more...</button>
            </div>
            <!-- <div class=" sm:grid sm:grid-cols-3 md:flex gap-6 mt-7"></div> -->
            <div class=" w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5 lg:max-w-7xl">
            <div class="flex flex-row  space-x-3 w-[1200px] mx-auto [&::-webkit-scrollbar]:hidden">
                <div class="text-white relative">
                    <div class="relative min-w-[150px] " aria-selected="true">
                        <img src="../images/movie-1.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Sonic</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-2.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>morbius</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-3.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Adam project</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-4.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Free Guy</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-5.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Batman</span>
                </div>
                <div class="text-white relative">
                    <div class="relative min-w-[150px]" aria-selected="true">
                        <img src="../images/movie-6.png" alt="" class="w-full h-full rounded-md">
                        <div class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center  w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90">
                            <span class="text-sm md:text-md">imdb: 8.4</span>
                            <div class="like-box text-sm md:text-md">
                                <i class="fas fa-heart"></i>
                                <span>90%</span>
                            </div>    
                        </div>
                    </div>
                    <span>Uncharted</span>
                </div>
                
            </div>
            </div>
        </section>
    </main>


</div> 
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
</script>

<style>

</style>