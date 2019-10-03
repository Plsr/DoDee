<template>
  <div class="wrapper">
    Filtered for
    <div class="filterPill">
      #
      <slot></slot>
      <span class="removeIcon">✗</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filterPill {
  display: inline;
  padding: 0.25rem 0.5rem;
  border: 2px solid rgb(248, 114, 114);
  color: rgb(248, 114, 114);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
}

.filterPill:hover {
  background-color: rgb(248, 114, 114);
  color: #fff;
}

.removeIcon {
  display: none;
  margin: 0 0.25rem;
}

.filterPill:hover > .removeIcon {
  display: inline-block;
}

.wrapper {
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.8rem;
}
</style>
