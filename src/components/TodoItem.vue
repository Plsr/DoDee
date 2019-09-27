<template>
  <li
    class="wrapper"
    v-bind:class="{ 'wrapper-active': hover || isContextMenuOpen }"
    @mouseover="handleMouseOver()"
    @mouseleave="handleMouseLeave()"
  >
    <tick-button
      v-on:click.native="handleCompleteClick"
      v-bind:is-completed="isCompleted"
    />
    <span v-bind:class="{ 'todo-text-completed': this.isCompleted }">
      {{ todo.title }}
      <project-pill v-show="!!todo.project">`todo.project`</project-pill>
    </span>
    <context-menu
      class="context-menu"
      button-text="Edit"
      v-if="hover || isContextMenuOpen"
      v-on:on-change-state="handleMenuStateChange"
    >
      <span v-on:click="handleDeleteClick">Delete Todo</span>
    </context-menu>
  </li>
</template>

<script>
import ProjectPill from "./ProjectPill.vue";
import TickButton from "./TickButton.vue";
import ContextMenu from "./ContextMenu.vue";

export default {
  props: ["todo"],
  data() {
    return {
      hover: false,
      isContextMenuOpen: false
    };
  },
  components: {
    ProjectPill,
    TickButton,
    ContextMenu
  },
  methods: {
    handleCompleteClick() {
      this.$emit("checkbox-click");
    },
    handleDeleteClick() {
      this.$emit("delete-click");
    },
    handleMouseOver() {
      this.hover = true;
    },
    handleMouseLeave() {
      this.hover = false;
    },
    handleMenuStateChange(event) {
      this.isContextMenuOpen = event === "open";
    }
  },
  computed: {
    isCompleted() {
      return this.todo.done;
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding: 0.8rem 0;
  list-style-type: none;
  display: flex;
}

.wrapper-active {
  background-color: #f8f8f8;
}

.todo-text-completed {
  text-decoration: line-through;
  color: #999;
}

.context-menu {
  margin-left: auto;
}
</style>
