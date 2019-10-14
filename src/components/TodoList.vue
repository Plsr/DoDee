<template>
  <div class="card">
    <h3 class="headline">🔥 Today</h3>
    <filter-pill v-on:click.native="clearFilter" v-if="this.filter">{{ this.filter }}</filter-pill>
    <ul class="todo-list">
      <todo-item
        v-for="(todo, index) in openTodos"
        v-bind:key="index"
        v-bind:todo="todo"
        v-on:checkbox-click="handleTodoClick(todo)"
        v-on:delete-click="handleTodoDelete(todo)"
        v-on:edit-click="handleTodoEdit(todo)"
        v-on:tag-click="setFilter"
      />
    </ul>
    <div class="button-wrapper">
      <button class="add-task-button" v-on:click="showCreateForm">+ Add new task</button>
      <small class="button-annotation">Or press Shift + A</small>
    </div>
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
import TodoItem from "./TodoItem.vue";
import FilterPill from "./FilterPill.vue";

export default {
  props: ["todos"],
  components: {
    TodoItem,
    FilterPill
  },
  data() {
    return {
      filter: undefined
    };
  },
  computed: {
    openTodos() {
      return this.filteredTodos().filter(todo => !todo.done);
    },
    finishedTodos() {
      return this.filteredTodos().filter(todo => todo.done);
    }
  },
  methods: {
    filteredTodos() {
      if (!this.filter) return this.todos;
      return this.todos.filter(todo => {
        return todo.tags.includes(this.filter);
      });
    },
    handleTodoClick(todo) {
      const index = this.todos.indexOf(todo);
      this.$emit("toggle-todo", index);
    },
    handleTodoDelete(todo) {
      const index = this.todos.indexOf(todo);
      this.$emit("delete-todo", index);
    },
    handleTodoEdit(todo) {
      this.$modal.show("create-todo-modal", { todo });
    },
    showCreateForm() {
      this.$modal.show("create-todo-modal");
    },
    setFilter(filter) {
      this.filter = filter;
    },
    clearFilter() {
      this.filter = undefined;
    }
  }
};
</script>

<style scoped>
.headline {
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.button-annotation {
  font-weight: 600;
  color: #888;
  margin-top: 0.25rem;
  font-size: 0.7rem;
  font-style: italic;
}

.add-task-button {
  border: 2px solid #3a7bd5;
  color: #3a7bd5;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
  background-color: transparent;
  padding: 0.7rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.add-task-button:hover {
  color: #ffffff;
  background-color: #3a7bd5;
}

.headline-completed {
  color: #bbb;
  margin-top: 2rem;
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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
</style>
