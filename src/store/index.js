import { createStore } from 'vuex'
import { mapState } from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore';

export default createStore({
  state: {
    fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
    animeList:'',
    userID:''
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
    }

  },
  actions: {
  },
  modules: {
  },
  getters: {
    fetcheddataGetter: state=>state.fetcheddata,
    animelistGetter: state=>state.animeList,
    userIDGetter: state=>state.userID,
    usernameGetter : state=>{if (state.userID != '') {
      console.log('state.userID = ' + state.userID)
      firebase.firestore().collection('users').doc(state.userID).get()
      .then((doc)=>{
        console.log(doc.data())
        return doc.data().Username
      })
    }
    else return 'no users found'
  }
  // computed: {
  //   ...mapState(['fetcheddata','animeList','userID'])
  // }
}
})
