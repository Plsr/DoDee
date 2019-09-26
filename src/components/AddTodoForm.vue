<template>
  <div class="wrapper">
    <div class="todo-button-dummy" /><input v-model="todoTitle" v-on:keydown.enter="handleSubmit" type="text" placeholder="add new task">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todoTitle: ''
      }
    },
    methods: {
      handleSubmit() {
        if (this.todoTitle.length <= 0) return

        const split = this.todoTitle.split('#')
        const title = split [0]
        const project = split[1]
        this.$emit('create-todo', title, project)

        this.todoTitle = ''
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo-button-dummy {
    position: relative;
    border: 2px solid #999;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    margin-right: 1rem;
  }
</style>
