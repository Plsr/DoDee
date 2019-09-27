<template>
  <button
    class="todo-button"
    v-bind:class="{ 'todo-button-completed': this.isCompleted }"
  />
</template>

<script>
export default {
  props: ["isCompleted"]
};
</script>

<style scoped>
.todo-button {
  position: relative;
  box-sizing: border-box;
  border: 2px solid #999;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  margin-right: 1rem;
}

.todo-button:hover {
  background-color: #999;
}

.todo-button-completed {
  position: relative;
  border-color: #999999;
}

.todo-button-completed::after {
  content: "✔";
  color: #999999;
  position: absolute;
  font-size: 0.9rem;
  top: 0;
  left: 3px;
}
</style>
