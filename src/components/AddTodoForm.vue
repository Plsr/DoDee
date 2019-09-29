<template>
  <modal name="create-todo-modal">
    <div class="content">
      <h3 class="headline">📝 Add new todo</h3>
      <input
        class="input"
        v-model="todoTitle"
        v-on:keydown.enter="handleSubmit"
        type="text"
        placeholder="🥛 Buy soy milk"
      />
      <small v-if="todoTitle"
        >Add tags to the task by prefixing them with a
        <span class="tag-visualisation">#hash</span></small
      >
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
      todoTitle: ""
    };
  },
  methods: {
    handleSubmit() {
      if (this.todoTitle.length <= 0) return;

      const todoData = this.getTodoData();
      this.$emit("create-todo", todoData.title, todoData.tags);

      this.resetFormState();
    },
    getTodoData() {
      const split = this.todoTitle.split("#");
      const title = split[0];
      const tags = split[1];
      return { title, tags: [tags] };
    },
    resetFormState() {
      this.todoTitle = "";
      this.$modal.hide("create-todo-modal");
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
