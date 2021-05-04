import { createStore } from 'vuex'

export default createStore({
  state: {
    fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
    animeList:''
  },
  mutations: {
    changeFetcheddata(state,newdata)
    {
      state.fetcheddata = newdata
    },
    changeAnimeList(state,newdata)
    {
      state.animeList = newdata
    }

  },
  actions: {
  },
  modules: {
  },
  getters: {
    fetcheddataGetter: state=>state.fetcheddata,
    animelistGetter: state=>state.animeList
  }
})
