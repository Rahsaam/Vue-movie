import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { router } from './router'
import useAuth from './composables/useAuth'
import imageDirective from '@/directives/imagePreLoader.js';
library.add(faUserSecret)
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options =  {
	position: "top-right",
	timeout: 5000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: true,
	draggable: true,
	draggablePercent: 0.6,
	showCloseButtonOnHover: false,
	hideProgressBar: true,
	closeButton: "button",
	icon: true,
	rtl: false,
};

const app = createApp(App)
app.use(router)
useAuth(app)
app.use(Toast, options) 
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('img', imageDirective);
app.mount('#app')