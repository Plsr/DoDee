<template>
  <div>
    <h3>Still todo</h3>
    <ul>
      <li v-for="(todo, index) in openTodos" v-bind:key="index">{{ todo.title }}</li>
    </ul>
    <h3>Completed</h3>
    <ul>
      <li v-for="(todo, index) in finishedTodos" v-bind:key="index">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['todos'],
    computed: {
      openTodos() {
        return this.todos.filter(todo => !todo.done)
      },
      finishedTodos() {
        return this.todos.filter(todo => todo.done)
      }
    }
  }
</script>
