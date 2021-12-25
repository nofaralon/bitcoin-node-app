<template>
  <tr>
    <td>
      {{ node.ip }}
    </td>
    <td>{{ node.port }}</td>
    <td class="status">{{ (node.isBitnodes)? '✔' : '❌' }}</td>
    <td class="action-btn">
      <button @click="updateNode(node._id)">Update</button>
      <button @click="removeNode(node._id)">Delete</button>
    </td>
  </tr>
</template>

<script>

export default {
  name: "node-table-row",
  props: {
    node: Object,
  },
  computed: {
   
  },
  methods: {
    removeNode(nodeId) {
      this.$emit("removed", nodeId);
    },
      updateNode(nodeId) {
      this.$emit("updated", nodeId);
    },
  },
};
</script>
