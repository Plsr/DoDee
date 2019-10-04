<template>
  <div class="wrapper">
    <span class="headline">From Yesterday</span>
    <div class="contentWrapper">
      <div>{{ this.todo.title }}</div>
      <div>
        <button class="button button-dismiss" v-on:click="handleDismissClick">✗ Dismiss</button>
        <button class="button button-import" v-on:click="handleImportClick">↻ Import</button>
      </div>
    </div>
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

<style scoped>
.wrapper {
  background-color: #ffffff;
  padding: 1rem 0.5rem 1rem 1rem;
  max-width: 600px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  margin: 0 auto;
}

.contentWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.headline {
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
}

.button {
  font-family: inherit;
  font-size: 100%;
  border: 0;
  border-radius: none;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 2px solid #333;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
}

.button:last-of-type {
  margin-right: 0;
}

.button-dismiss {
  color: rgb(248, 114, 114);
  border-color: rgb(248, 114, 114);
}

.button-dismiss:hover {
  color: #ffffff;
  background-color: rgb(248, 114, 114);
}

.button-import {
  color: #3a7bd5;
  border-color: #3a7bd5;
}

.button-import:hover {
  color: #ffffff;
  background-color: #3a7bd5;
}
</style>
