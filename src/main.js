import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { router } from './router'
import useAuth from './composables/useAuth'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App)
app.use(router)
useAuth(app)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')