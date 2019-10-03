<template>
  <modal
    name="create-todo-modal"
    @before-open="beforeOpen"
    @opened="opened"
    @before-close="beforeClose"
  >
    <div class="content">
      <h3 class="headline">📝 Add new todo</h3>
      <input
        class="input"
        v-model="todo.title"
        v-on:keydown.enter="handleSubmit"
        type="text"
        placeholder="🥛 Buy soy milk"
        ref="todoInput"
      />
      <small v-if="this.todoTitlePresent()">
        Add tags to the task by prefixing them with a
        <span class="tag-visualisation">#hash</span>
      </small>
      <div class="submit-area">
        <button class="submit-button" v-on:click="handleSubmit">Submit</button>
        <small>Or hit enter</small>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      todo: { title: "", tags: [], id: undefined },
      inEditMode: false
    };
  },
  methods: {
    handleSubmit() {
      if (!this.todoTitlePresent()) return;

      const todoData = this.getTodoData();
      this.$emit("submit", todoData);

      this.resetFormState();
    },
    todoTitlePresent() {
      return this.todo.title.length > 0;
    },
    getTodoData() {
      const split = this.todo.title.split("#");
      const title = split[0].trim();
      const tags = split.slice(1, split.length);
      return { ...this.todo, title, tags: tags };
    },
    resetFormState() {
      this.todoTitle = "";
      this.$modal.hide("create-todo-modal");
    },
    beforeOpen(event) {
      if (!event.params) return;
      const todo = event.params.todo;
      const tagsString = todo.tags.map(tag => `#${tag.trim()}`).join(" ");
      const titleWithTags = todo.title + " " + tagsString;
      this.todo = { ...todo, title: titleWithTags };
      this.inEditMode = true;
    },
    opened() {
      this.focusInput();
    },
    beforeClose() {
      if (this.inEditMode) {
        this.todoTitle = "";
        this.inEditMode = false;
      }
    },
    focusInput() {
      this.$refs.todoInput.focus();
    }
  }
};
</script>

<style scoped>
small {
  font-size: 0.8rem;
  color: #888;
}
.content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
}

.tag-visualisation {
  padding: 0.2rem;
  background-color: #eee;
  border-radius: 2px;
}

.headline {
  margin-top: 0;
  margin-bottom: 1rem;
}

.submit-area {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.input {
  width: 100%;
  height: 3rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-style: italic;
  padding: 0 1rem;
  margin-bottom: 0.7rem;
}

.input:focus {
  outline: none;
  font-style: normal;
  border-color: #888;
  color: #333;
}

.submit-button {
  color: #ffffff;
  background-color: #3a7bd5;
  border: none;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
  padding: 0.7rem 3rem;
  cursor: pointer;
  margin-bottom: 0.3rem;
}

.submit-button:hover {
  color: #ffffff;
  background-color: #295696;
}
</style>
