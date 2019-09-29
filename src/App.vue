<template>
  <div id="app">
    <time-display />
    <add-todo-form v-on:create-todo="addTodo" />
    <todo-list
      v-on:toggle-todo="toggleTodo"
      v-on:delete-todo="deleteTodo"
      v-bind:todos="todos"
      v-if="dataLoaded"
    />
  </div>
</template>

<script>
import dayjs from "dayjs";
import TodoList from "./components/TodoList.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import TimeDisplay from "./components/TimeDisplay.vue";

import { moveProjectsToTags } from "./utils/DataIntegrity.js";

export default {
  name: "app",
  components: {
    TodoList,
    AddTodoForm,
    TimeDisplay
  },
  data: function() {
    return {
      todos: [],
      dataLoaded: false
    };
  },
  created() {
    window.addEventListener("beforeunload", this.saveTodos);
  },
  async mounted() {
    if (localStorage.getItem("todos")) {
      try {
        const importedTodos = await JSON.parse(localStorage.getItem("todos"));
        const filteredTodos = importedTodos.filter(
          todo => todo.createdAt && dayjs(todo.createdAt).isSame(dayjs(), "day")
        );
        const todosWithIntegrity = moveProjectsToTags(filteredTodos);
        this.todos = todosWithIntegrity;
        this.dataLoaded = true;
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
  methods: {
    addTodo(title, tags) {
      this.todos.push({
        title,
        tags: [...tags],
        done: false,
        createdAt: new Date()
      });
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    saveTodos() {
      const parsedTodos = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsedTodos);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #f8f8f8;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
