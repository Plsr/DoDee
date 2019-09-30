<template>
  <span class="background">
    #
    <slot></slot>
  </span>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  font-size: 0.8rem;
  background-color: #eeeeee;
  border-radius: 4px;
  padding: 0.4rem;
  margin-right: 0.5rem;
}

.background:last-of-type {
  margin-right: 0;
}
</style>
