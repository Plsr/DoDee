<template>
  <li class="wrapper" @mouseover="handleMouseOver()" @mouseleave="handleMouseLeave()">
    <tick-button v-on:click.native="handleCompleteClick" v-bind:is-completed="isCompleted" />
    <span class="todo-text" v-bind:class="{ 'todo-text-completed': isCompleted }">{{ todo.title }}</span>
    <div class="project-pills" v-if="todo.tags && todo.tags.length > 0">
      <tag-pill
        v-for="(tag, index) in todo.tags"
        v-bind:key="index"
        v-bind:is-disabled="isCompleted"
      >{{ tag }}</tag-pill>
    </div>
    <context-menu
      class="context-menu"
      button-text="Edit"
      v-if="hover || isContextMenuOpen"
      v-on:on-change-state="handleMenuStateChange"
      v-bind:menu-items="this.contextMenuItems"
    />
  </li>
</template>

<script>
import TagPill from "./TagPill.vue";
import TickButton from "./TickButton.vue";
import ContextMenu from "./ContextMenu.vue";

export default {
  props: ["todo"],
  data() {
    return {
      hover: false,
      isContextMenuOpen: false,
      contextMenuItems: [
        { title: "Delete", callback: this.handleDeleteClick },
        { title: "Edit", callback: this.handleEditClick }
      ]
    };
  },
  components: {
    TagPill,
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
    handleEditClick() {
      this.$emit("edit-click");
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

.todo-text {
  margin-right: 0.5rem;
}

.todo-text-completed {
  text-decoration: line-through;
  color: #999;
}

.context-menu {
  margin-left: auto;
}

.project-pills {
  display: inline;
}
</style>
