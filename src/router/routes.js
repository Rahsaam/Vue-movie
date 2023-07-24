import MainPage               from '@/components/MoviePages/MainPage.vue' 
import MovieDetailPage        from '@/components/MoviePages/MovieDetailPage.vue' 
import LoginPage              from '@/components/MoviePages/LoginPage.vue' 
import SerialDetailPage       from '@/components/MoviePages/SerialDetailPage.vue' 
import WatchListPage          from '@/components/MoviePages/WatchListPage.vue' 
import WatchListDetailPage    from '@/components/MoviePages/WatchListDetailPage.vue' 
import ProfilePage            from '@/components/MoviePages/ProfilePage.vue' 

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
    {
        path:'/watchList', 
        name:'WatchList', 
        component: WatchListPage,
        meta : {requiresAuth : true},
    },
    {
        path:'/watchList/:id', 
        name:'WatchListDetail', 
        component: WatchListDetailPage,
    },
    {
        path:'/profile', 
        name:'Profile', 
        component: ProfilePage,
        meta : {requiresAuth : true},
    },
]