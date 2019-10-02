<template>
  <div class="context-menu-wrapper" v-click-outside="handleOutsideClick">
    <button class="edit-button" v-on:click="handleButtonClick()">
      <svg width="20" height="16">
        <circle cx="4" cy="10" r="2" />
        <circle cx="10" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
      </svg>
    </button>
    <div v-if="isMenuOpen" class="menu">
      <div
        v-for="(item, index) in this.menuItems"
        v-bind:key="index"
        v-on:click="item.callback"
        class="item"
      >{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["buttonText", "menuItems"],
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
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
}

.item:hover {
  background-color: #f8f8f8;
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
  top: 50%;
  left: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
</style>
