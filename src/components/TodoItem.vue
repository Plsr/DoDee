<template>
  <li class="wrapper">
    <tick-button
      v-on:click.native="handleCompleteClick"
      v-bind:is-completed="isCompleted"
    />
    <span v-bind:class="{ 'todo-text-completed': this.isCompleted }">{{ todo.title}} <project-pill v-show="!!todo.project">{{todo.project}}</project-pill></span>
    <button v-on:click="handleDeleteClick">Delete</button>
  </li>
</template>

<script>
  import ProjectPill from './ProjectPill.vue'
  import TickButton from './TickButton.vue'

  export default {
    props: ['todo'],
    components: {
      ProjectPill,
      TickButton
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

  .todo-text-completed {
    text-decoration: line-through;
    color: #999;
  }
</style>
