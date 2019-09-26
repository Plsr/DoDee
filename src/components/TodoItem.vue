<template>
  <li class="wrapper">
    <button
      v-on:click="handleCompleteClick"
      class="todo-button"
      v-bind:class="{ 'todo-button-completed': this.isCompleted}"
    />
    <span v-bind:class="{ 'todo-text-completed': this.isCompleted }">{{ todo.title}} <project-pill v-show="!!todo.project">{{todo.project}}</project-pill></span>
    <button v-on:click="handleDeleteClick">Delete</button>
  </li>
</template>

<script>
  import ProjectPill from './ProjectPill.vue'

  export default {
    props: ['todo'],
    components: {
      ProjectPill
    },
    methods: {
      handleCompleteClick() {
        this.$emit('checkbox-click')
      },
      handleDeleteClick() {
        this.$emit('delete-click')
      }
    },
    computed: {
      isCompleted() {
        return this.todo.done
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    padding: 0.8rem 0;
    list-style-type: none;
  }

  .todo-button {
    position: relative;
    box-sizing: border-box;
    border: 2px solid #999;
    border-radius: 50%;
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
    content: '✔';
    color: #999999;
    position: absolute;
    font-size: 0.9rem;
    top: 0;
    left: 3px;
  }

  .todo-text-completed {
    text-decoration: line-through;
    color: #999;
  }
</style>
