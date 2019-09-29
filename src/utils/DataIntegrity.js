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
