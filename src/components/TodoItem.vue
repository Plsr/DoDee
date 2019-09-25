<template>
  <div>
    <button v-on:click="handleClick" class="todo-button" />
    <span v-bind:class="{ 'todo-text-completed': this.isCompleted }"><slot></slot></span>
  </div>
</template>

<script>
  export default {
    props: ['isCompleted'],
    methods: {
      handleClick() {
        this.$emit('checkbox-click')
      }
    }
  }
</script>

<style>
  .todo-button {
    border: 2px solid #333333;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    margin-right: 1rem;
  }

  .todo-text-completed {
    text-decoration: line-through;
  }
</style>
