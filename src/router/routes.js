import HomePage from '@/components/HomePage/HomePage.vue'
import LoginPage from '@/components/MoviePages/LoginPage.vue'
import SerialDetailPage from '@/components/MoviePages/SerialDetailPage.vue'
import WatchListPage from '@/components/MoviePages/WatchListPage.vue'
import ProfilePage from '@/components/MoviePages/ProfilePage.vue'
import LogoutPage from '@/components/MoviePages/LogoutPage.vue'
import FavoritePage from '@/components/MoviePages/FavoritePage.vue'
import SingleMoviePage from '@/components/MovieDetailComponents/SingleMoviePage.vue'
import OldMoviesPage from '@/components/MoviePages/OldMoviesPage.vue'
import SearchResultPage from '@/components/MoviePages/SearchResultPage.vue'
import PeoplePage from '@/components/MoviePages/PeoplePage.vue'
import NotFoundPage from '@/components/MoviePages/NotFoundPage.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/serial/:id',
    name: 'serialDetail',
    component: SerialDetailPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutPage
  },
  {
    path: '/watchList',
    name: 'WatchList',
    component: WatchListPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/favorite/:id',
    name: 'Favorite',
    component: FavoritePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/movie/:id',
    name: 'SingleMovie',
    component: SingleMoviePage,
  },
  {
    path: '/old-movies/:id',
    name: 'OldMovies',
    component: OldMoviesPage
  },
  {
    path: '/result',
    name: 'Result',
    component: SearchResultPage
  },
  {
    path: '/people/:id',
    name: 'people',
    component: PeoplePage
  },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
]
