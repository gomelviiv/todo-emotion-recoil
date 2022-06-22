import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { selectorTodoList } from 'recoilState/atom/toDoList.atom';

import { Todo } from 'shared/interface/routes/recoil/todo.interface';

import TasksList from './TasksList';

const TasksListContainer: React.FC = () => {
  const todoList = useRecoilValue<Todo[]>(selectorTodoList);

  return <TasksList todoList={todoList} />;
};

export default TasksListContainer;
