<template>
  <ul>
    <li v-for="(todo, index) in todos" v-bind:key="index">{{ todo.title }}</li>
  </ul>
</template>

<script>
  export default {
    props: ['todos']
  }
</script>
