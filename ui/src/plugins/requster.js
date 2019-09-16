import Vue from 'vue'
import axios from 'axios'

class Requster {
    constructor() {

    }

    install(Vue, options) {
        Vue.prototype.$get = function (url, data) {
            return axios.get(url, {
                params: data ? data : {},
            })
        }
    }
}



Vue.use(new Requster)