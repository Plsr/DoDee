<template>
  <div>
    <button
      v-on:click="handleClick"
      class="todo-button"
      v-bind:class="{ 'todo-button-completed': this.isCompleted}"
    />
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
    position: relative;
    border: 2px solid #333333;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    margin-right: 1rem;
  }

  .todo-button:hover:after {
    content: '✔';
    position: absolute;
    font-size: 0.9rem;
    top: 0;
    left: 3px;
  }

  .todo-button-completed {
    position: relative;
    border-color: #999999;
  }

  .todo-button-completed::after {
    content: '✔';
    color: #999999;
    position: absolute;
    font-size: 0.9rem;
    top: 0;
    left: 3px;
  }

  .todo-text-completed {
    text-decoration: line-through;
  }
</style>
