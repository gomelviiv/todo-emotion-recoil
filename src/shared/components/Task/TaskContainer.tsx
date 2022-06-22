import React from 'react';
import { useRecoilState } from 'recoil';
import { selectorTodoList } from 'recoilState/atom/toDoList.atom';
import useLocalStorage from 'shared/hooks/useLocalStorage';
import { Todo } from 'shared/interface/routes/recoil/todo.interface';
import { deleteItemsFromArray } from 'utils/deleteItemsFromArray';
import { updateObjectBooleanKey } from 'utils/updateObjectBooleanKey';
import Task from './Task';

interface Props {
  taskInfo: Todo;
}

const TaskContainer: React.FC<Props> = ({ taskInfo }) => {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(selectorTodoList);
  const { setValue } = useLocalStorage();

  const onHandleCompleted = (id: string) => {
    const updatedArrayKeyData = updateObjectBooleanKey(todoList, 'isCompleted', id);

    setTodoList(updatedArrayKeyData);
    setValue('todoList', updatedArrayKeyData);
  };

  const onHandleDelete = (id: string) => {
    const todoListAfterDeletedValue = deleteItemsFromArray(todoList, id);

    setValue('todoList', todoListAfterDeletedValue);
    setTodoList(todoListAfterDeletedValue);
  };

  return <Task onHandleDelete={onHandleDelete} onHandleCompleted={onHandleCompleted} taskInfo={taskInfo} />;
};

export default TaskContainer;
