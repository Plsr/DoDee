<template>
  <div>
    <ul>
      <todo-item
        v-for="(todo, index) in openTodos"
        v-bind:key="index"
        v-bind:is-completed="todo.done"
        v-on:checkbox-click="handleTodoClick(todo)"
      >
        {{ todo.title }}
      </todo-item>
    </ul>
    <hr />
    <ul>
      <todo-item
        v-for="(todo, index) in finishedTodos"
        v-bind:key="index"
        v-bind:is-completed="todo.done"
        v-on:checkbox-click="handleTodoClick(todo)"
      >
        {{ todo.title }}
      </todo-item>
    </ul>
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'

  export default {
    props: ['todos'],
    components: {
      TodoItem
    },
    computed: {
      openTodos() {
        return this.todos.filter(todo => !todo.done)
      },
      finishedTodos() {
        return this.todos.filter(todo => todo.done)
      }
    },
    methods: {
      handleTodoClick(todo) {
        const index = this.todos.indexOf(todo)
        this.todos[index].done = !this.todos[index].done
      }
    }
  }
</script>
