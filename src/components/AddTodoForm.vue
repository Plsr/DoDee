<template>
  <modal name="create-todo-modal">
    <div class="content">
      <h3>Add new todo</h3>
      <input
        class="input"
        v-model="todoTitle"
        v-on:keydown.enter="handleSubmit"
        type="text"
        placeholder="add new task"
      />
      <button v-on:click="handleSubmit">Submit</button>
      <small>Or hit enter</small>
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
      this.$emit("create-todo", todoData.title, todoData.project);

      this.resetFormState();
    },
    getTodoData() {
      const split = this.todoTitle.split("#");
      const title = split[0];
      const project = split[1];
      return { title, project };
    },
    resetFormState() {
      this.todoTitle = "";
      this.$modal.hide("create-todo-modal");
    }
  }
};
</script>

<style scoped>
.content {
  padding: 1rem;
}

.input {
  width: 100%;
}
</style>
