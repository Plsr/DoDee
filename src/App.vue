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
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    }
  },
  methods: {
    addTodo(title, project) {
      this.todos.push({
        title,
        project: project,
        done: false
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
