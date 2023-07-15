import MainPage        from '@/components/MoviePages/MainPage.vue' 
import Profile         from '@/components/MoviePages/ProfilePage.vue' 
import MovieDetailPage from '@/components/MoviePages/MovieDetailPage.vue' 
import LoginPage       from '@/components/MoviePages/LoginPage.vue' 

export const routes = [
    {
        path:'/', 
        name:'home', 
        component: MainPage
    },
    {
        path:'/profile', 
        name:'profile', 
        component: Profile
    },
    {
        path:'/movie/:id', 
        name:'movieDetail', 
        component: MovieDetailPage,
    },
    {
        path:'/login', 
        name:'login', 
        component: LoginPage,
    },
]