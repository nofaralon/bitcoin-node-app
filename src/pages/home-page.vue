<template>
  <section class="home-page main-layout">
    <form @submit.prevent="check">
      <label>
        IP:
        <input v-model="node.ip" type="search">
      </label>
      <label>
        Port:
        <input  v-model="node.port" type="search">
      </label>
      <button class="submit-btn">Check</button>
    </form>

    <node-table @updated="updateNode" @removed="removeNode" v-if="nodes" :nodes="nodes"></node-table>

    <div class="Paging-btns">
    <button @click="setPageIdx('down')"> ⬅ Previous</button>
    <button @click="setPageIdx('up')" >Next ➡</button>
    </div>
  </section>
</template>


<script>

import nodeTable from '../cmps/node-table.vue'
import {nodeService} from '../services/node.service.js'

export default {
  name: "home-page",
  data() {
    return {
     node: null,
     pageIdx: 0
    };
  },
  created() { 
     this.node = this.$store.dispatch({ type: "getNode"});
     this.pageIdx = this.$store.getters.pageIdx;
    
  },
  methods: {
   check(){
     if(this.node.ip && this.node.port){
       this.$store.dispatch({ type: "checkNode", node: this.node});
       this.node =  nodeService.getEmptyNode() 
     } else{
       alert('IP/Port required to submit request')
     }
   },
   removeNode(nodeId){
     this.$store.dispatch({ type: "removeNode", nodeId});
     
   },
    async updateNode(nodeId) {
     this.node = await this.$store.dispatch({ type: "getNode",nodeId });
    },
    setPageIdx(val){
      (val === 'up')? this.pageIdx +=1 : this.pageIdx -=1
       this.$store.dispatch({ type: "loadNodes", pageIdx: this.pageIdx});

    }

  },
  computed: {
     nodes(){
      return this.$store.getters.nodes;
    }
  },
  components: {
    nodeTable
  },
};
</script>

