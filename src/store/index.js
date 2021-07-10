import { createStore } from 'vuex'
import { mapState } from 'vuex'
import {auth, db} from '../firebase'


export default createStore({
  state: {
    fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
    isLoggedIn:'',
    animeList:'',
    username:'',
    PPURL:''
  },
  mutations: {
    changeFetcheddata(state,newdata)
    {
      state.fetcheddata = newdata
    },
    changeAnimeList(state,newdata)
    {
      state.animeList = newdata
    },
    changeUserID(state,newdata)
    {
      state.userID = newdata
    },
    changeUsername(state,newdata){
      state.username = newdata
    },
    changePP(state,newdata){
      state.PPURL = newdata
    },
    changeLoggedIn(state,newdata){
      state.isLoggedIn = newdata
    },
  },
  actions: {
    // getUsername({state,commit}){
    //   if (state.userID != '') {
    //     console.log('state.userID = ' + state.userID)
    //     db.collection('users').doc(state.userID).get()
    //     .then((doc)=>{
    //       console.log(doc.data())
    //       commit('changeUsername',doc.data().Username)
    //     })
    //   }
    //   else commit('changeUsername','no users found') 
    // },
  },
  modules: {
  },
  getters: {
    fetcheddataGetter: state=>state.fetcheddata,
    animelistGetter: state=>state.animeList,
    //userIDGetter: state=>state.userID,
    usernameGetter : state=> state.username,
    PPGetter : state=> state.PPURL,
    isLoggedInGetter : state=> state.isLoggedIn,


  // computed: {
  //   ...mapState(['fetcheddata','animeList','userID'])
  // }
}
})
