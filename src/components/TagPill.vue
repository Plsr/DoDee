<template>
  <span class="background" v-bind:class="{ 'background-disabled': this.isDisabled }">
    #
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ["isDisabled"]
};
</script>

<style scoped>
.background {
  font-size: 0.8rem;
  background-color: #eeeeee;
  border-radius: 4px;
  padding: 0.4rem;
  margin-right: 0.5rem;
  text-decoration: none;
  cursor: pointer;
}

.background:hover {
  background-color: #ddd;
}

.background-disabled {
  background-color: #f8f8f8;
  color: #aaa;
}

.background-disabled:hover {
  background-color: #f8f8f8;
}

.background:last-of-type {
  margin-right: 0;
}
</style>
