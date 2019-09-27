<template>
  <div class="context-menu-wrapper" v-click-outside="handleOutsideClick">
    <button class="edit-button" v-on:click="handleButtonClick()">
      <svg width="20" height="16">
        <circle cx="4" cy="10" r="2" />
        <circle cx="10" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
      </svg>
    </button>
    <ul v-if="isMenuOpen" class="menu">
      <li class="item">
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["buttonText"],
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    handleButtonClick() {
      this.isMenuOpen = !this.isMenuOpen;
      this.$emit("on-change-state", this.isMenuOpen ? "open" : "closed");
    },
    handleOutsideClick() {
      this.isMenuOpen = false;
      this.$emit("on-change-state", this.isMenuOpen ? "open" : "closed");
    }
  }
};
</script>

<style scoped>
.context-menu-wrapper {
  position: relative;
  display: inline;
}

.item {
  display: block;
  white-space: nowrap;
  list-style-type: none;
}

.edit-button {
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}

.menu {
  position: absolute;
  background-color: #ffffff;
  padding: 0.5rem;
}
</style>
