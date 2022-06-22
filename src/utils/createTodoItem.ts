export const createTodoItem = (todoList, v4, inputValue) => [
  ...todoList,
  {
    id: v4,
    title: inputValue,
    isCompleted: false,
  },
];
