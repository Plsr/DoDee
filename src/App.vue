<template>
  <div id="app">
    <time-display />
    <add-todo-form v-on:create-todo="addTodo"/>
    <todo-list v-bind:todos="todos" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import AddTodoForm from './components/AddTodoForm.vue'
import TimeDisplay from './components/TimeDisplay.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    AddTodoForm,
    TimeDisplay
  },
  data: function() {
    return {
      todos: [],
    }
  },
  created() {
    window.addEventListener('beforeunload', this.saveTodos)
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'))
      } catch(e) {
        localStorage.removeItem('todos')
      }
    }
  },
  methods: {
    addTodo(title, project) {
      this.todos.push({
        title,
        project: project,
        done: false
      })
    },
    saveTodos() {
      const parsedTodos = JSON.stringify(this.todos)
      localStorage.setItem('todos', parsedTodos)
    }
  }
}
</script>

<style>
body {
  background-color: #f8f8f8;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
