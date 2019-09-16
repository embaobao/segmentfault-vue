import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import requstion from './modules/requestion'
import blog from './modules/blog'


import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

    },
    mutations,
    actions,
    modules: {
        home,
        requstion,
        blog
    }
})

export default store