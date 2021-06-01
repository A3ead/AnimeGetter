import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)
app.use(store).use(router).mount('#app')

library.add(faUserSecret)

app.component('font-awesome-icon', FontAwesomeIcon)


