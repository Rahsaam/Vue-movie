import MainPage        from '@/components/MoviePages/MainPage.vue' 
import MovieDetailPage from '@/components/MoviePages/MovieDetailPage.vue' 
import LoginPage       from '@/components/MoviePages/LoginPage.vue' 
import SerialDetailPage       from '@/components/MoviePages/SerialDetailPage.vue' 

export const routes = [
    {
        path:'/', 
        name:'home', 
        component: MainPage
    },
    {
        path:'/movie/:id', 
        name:'movieDetail', 
        component: MovieDetailPage,
    },
    {
        path:'/serial/:id', 
        name:'serialDetail', 
        component: SerialDetailPage,
    },
    {
        path:'/login', 
        name:'login', 
        component: LoginPage,
    },
]