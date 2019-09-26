<template>
  <div class="card">
    <h3 class="headline">🔥 Today</h3>
    <ul class="todo-list">
      <todo-item
        v-for="(todo, index) in openTodos"
        v-bind:key="index"
        v-bind:todo="todo"
        v-on:checkbox-click="handleTodoClick(todo)"
        v-on:delete-click="handleTodoDelete(todo)"
      />
    </ul>
    <h3 class="headline headline-completed">Completed</h3>
    <ul class="todo-list">
      <todo-item
        v-for="(todo, index) in finishedTodos"
        v-bind:key="index"
        v-bind:todo="todo"
        v-on:checkbox-click="handleTodoClick(todo)"
      />
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
        this.$emit('toggle-todo', index)
      },
      handleTodoDelete(todo) {
        const index = this.todos.indexOf(todo)
        this.$emit('delete-todo', index)
      }
    }
  }
</script>

<style scoped>
  .headline {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .headline-completed {
    color: #aaa;
    margin-top: 2rem;
    text-decoration: line-through;
  }

  .todo-list {
    margin: 0;
    padding: 0;
  }

  .card {
    background-color: #ffffff;
    padding: 1rem;
    max-width: 600px;
    margin: 1rem auto;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07),
                0 2px 4px rgba(0,0,0,0.07),
                0 4px 8px rgba(0,0,0,0.07),
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07),
                0 32px 64px rgba(0,0,0,0.07);
  }
</style>
