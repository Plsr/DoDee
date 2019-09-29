<template>
  <div>
    <div>{{ this.todo.title }}</div>
    <button v-on:click="handleDismissClick">Dismiss</button>
    <button v-on:click="handleImportClick">Import</button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    handleDismissClick() {
      this.$emit("dismiss-click");
    },
    handleImportClick() {
      this.$emit("import-click", this.todo);
    }
  }
};
</script>
