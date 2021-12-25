import Vue from 'vue'
import Vuex from 'vuex'

import { nodeStore } from './node.store'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    modules: {
        nodeStore,
    }
})