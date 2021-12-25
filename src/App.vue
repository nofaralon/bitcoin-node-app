<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
// import { router } from "./router/index.js";
import { store } from "./store/index.js";
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";

export default {
  name: "App",
  data() {
    return {
    };
  },
   async created() { 
     
     await this.$store.dispatch({ type: "loadNodes", pageIdx:0});
  
    
  },

  methods: {
  },
  computed: {
  },
  components: {
    appHeader,
    appFooter,
  },
  
  // router: router,
  store: store,
};
</script>
