import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import firebase from 'firebase/app'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Your web app's Firebase configuration


const app = createApp(App)

app.use(store).use(router).mount('#app')


