<template>
  <table class="node-table">

    <thead>
      <tr>
        <th>IP</th>
        <th>Port</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody v-if="nodes">
      <template v-for="(node) in nodes">
        <node-table-row
          :key="node._id"
          :node="node"
          @removed="removeNode"
          @updated="updateNode"
        ></node-table-row>
      </template>
    </tbody>

  </table>
</template>


<script>
import nodeTableRow from "./node-table-row.vue";

export default {
  name: "node-table",
  components: {
    nodeTableRow,
  },
  props: {
    nodes: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    removeNode(nodeId) {
      this.$emit("removed", nodeId);
    },
      updateNode(nodeId) {
      this.$emit("updated", nodeId);
    }
  }
  
};
</script>