import { createStore } from 'vuex'
import { mapState } from 'vuex'
import {auth, db} from '../firebase'


export default createStore({
  state: {
    fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
    animeList:'',
    userID:'',
    username:'',
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

  },
  actions: {
    getUsername({state,commit}){
      if (state.userID != '') {
        console.log('state.userID = ' + state.userID)
        db.collection('users').doc(state.userID).get()
        .then((doc)=>{
          console.log(doc.data())
          commit('changeUsername',doc.data().Username)
        })
      }
      else commit('changeUsername','no users found') 
    },
  },
  modules: {
  },
  getters: {
    fetcheddataGetter: state=>state.fetcheddata,
    animelistGetter: state=>state.animeList,
    userIDGetter: state=>state.userID,
    usernameGetter : state=> state.username,

  // computed: {
  //   ...mapState(['fetcheddata','animeList','userID'])
  // }
}
})
