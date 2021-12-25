import Vue from 'vue'
import Vuex from 'vuex'
import { nodeService } from '../services/node.service'

Vue.use(Vuex)

export const nodeStore = {
    strict: true,
    state: {
        isLoading: false,
        nodes: [],
        currNode: null,
        pageIdx: 0
    },
    getters: {
        nodes(state) {
            return state.nodes
        },
        isLoading({ isLoading }) {
            return isLoading
        },
        getNode({ currNode }) {
            return currNode
        },
        pageIdx(state) {
            return state.pageIdx
        }
    },
    mutations: {
        setLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        setPageIdx(state, { pageIdx }) {
            state.pageIdx = pageIdx
            let maxPage = Math.ceil(state.stays.length / state.pageSize)

            if (state.pageIdx >= maxPage) state.pageIdx = 0
            else if (state.pageIdx < 0) state.pageIdx = maxPage - 1
        },
        removeNode(state, payload) {
            state.nodes = state.nodes.filter((node) => node._id !== payload.nodeId)
        },
        addNode(state, payload) {
            state.nodes.unshift(payload.node)
        },
        updateNode(state, payload) {
            const idx = state.nodes.findIndex((node) => node._id === payload.node._id)
            state.nodes.splice(idx, 1, payload.node)
        },
        setNodes(state, { nodes }) {
            state.nodes = nodes
        },
        setNode(state, { stay }) {
            state.currStay = stay
        }
    },
    actions: {
        async loadNodes({ commit }, { pageIdx }) {

            // commit({ type: 'setLoading', isLoading: true })
            const nodes = await nodeService.query(pageIdx)
            commit({ type: 'setNodes', nodes })
                //commit({ type: 'setLoading', isLoading: false })
        },

        async checkNode({ commit }, { node }) {
            const addedNode = await nodeService.save(node)
            if (node._id) {
                commit({ type: 'updateNode', node: addedNode })
            } else {
                commit({ type: 'addNode', node: addedNode })
            }
            return addedNode
        },
        async removeNode({ commit }, { nodeId }) {
            await nodeService.remove(nodeId)
            commit({ type: 'removeNode', nodeId })
        },
        async getNode({ commit }, { nodeId }) {
            commit({ type: 'setLoading', isLoading: true })

            if (!nodeId) {
                return nodeService.getEmptyNode()
            } else
                var node = await nodeService.getById(nodeId)
            console.log(node, 'node in store');
            commit({ type: 'setNode', node })
            commit({ type: 'setLoading', isLoading: false })
            return node

        },
    },
}