<template>
  <div id="app">
    <time-display />
    <add-todo-form v-on:create-todo="addTodo" />
    <import-candidate
      v-on:import-click="importTodo(importTodos[0])"
      v-on:dismiss-click="dismissTodo"
      v-if="dataLoaded && this.hasImportCandidates()"
      v-bind:todo="this.importTodos[0]"
    />
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
import ImportCandidate from "./components/ImportCandidate.vue";

import { moveProjectsToTags } from "./utils/DataIntegrity.js";

export default {
  name: "app",
  components: {
    TodoList,
    AddTodoForm,
    TimeDisplay,
    ImportCandidate
  },
  data: function() {
    return {
      todos: [],
      importTodos: [],
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

        // Always call integrity service and just change that parent function then?
        const securedTodos = moveProjectsToTags(importedTodos);

        const todaysTodos = securedTodos.filter(
          todo => todo.createdAt && dayjs(todo.createdAt).isSame(dayjs(), "day")
        );
        const yesterdaysTodos = securedTodos.filter(
          todo =>
            todo.createdAt &&
            dayjs(todo.createdAt).isSame(dayjs().subtract(1, "day"), "day")
        );

        this.todos = todaysTodos;
        this.importTodos = yesterdaysTodos;
        this.dataLoaded = true;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        localStorage.removeItem("todos");
      }
    }
  },
  methods: {
    addTodo(title, tags) {
      const cleanedTags = tags.filter(el => el);
      this.todos.push({
        title,
        tags: cleanedTags,
        done: false,
        createdAt: dayjs().subtract(1, "days")
      });
    },
    importTodo(todo) {
      const importedTodo = { ...todo, createdAt: dayjs() };
      this.todos.push(importedTodo);
      this.importTodos.shift();
    },
    dismissTodo() {
      this.importTodos.shift();
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    saveTodos() {
      const parsedTodos = JSON.stringify([...this.todos, ...this.importTodos]);
      localStorage.setItem("todos", parsedTodos);
    },
    hasImportCandidates() {
      return this.importTodos && this.importTodos.lenght > 0;
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
