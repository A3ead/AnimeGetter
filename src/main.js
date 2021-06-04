import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBj49KbocryPekZ-fUY47STQXqP-VtTNgw",
authDomain: "animegetter0.firebaseapp.com",
projectId: "animegetter0",
storageBucket: "animegetter0.appspot.com",
messagingSenderId: "83622700860",
appId: "1:83622700860:web:7f4c3e66b7ef2fe9eea039"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App)

app.use(store).use(router).mount('#app')


