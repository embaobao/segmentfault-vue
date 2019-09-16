import axios from 'axios'
let homeStore = {
    state: {
        newList:[]
    },
    getters: {},
    mutations: {
        setNewList(state,list ){
            state.newList=list
        }
    },
    actions: {
       async LoadNewList({commit} ){
          let list=( await axios.get('http://localhost:8080/api/api/timelines/feed?offset=1567557284584&_=ec4f745c18afe1d7254a98ad9bc8b79b')).data.data
        commit('setNewList',list)
       }

    }
}


export default homeStore