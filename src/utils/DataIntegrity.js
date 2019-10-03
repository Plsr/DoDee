import uniqid from "uniqid";

export function prepareTodoData(todos) {
  const withTags = moveProjectsToTags(todos);
  const withIds = addIdsToTodos(withTags);
  return withIds;
}

export function moveProjectsToTags(todos) {
  return todos.map(todo => {
    if (todo.project) {
      const todoWithTags = {
        ...todo,
        tags: [todo.project]
      };
      delete todoWithTags.project;
      return todoWithTags;
    }
    return todo;
  });
}

function addIdsToTodos(todos) {
  return todos.map(todo => {
    if (todo.id) return todo;
    return { ...todo, id: uniqid() };
  });
}
