import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { v4 } from 'uuid';
import { selectorTodoList } from 'recoilState/atom/toDoList.atom';

import { Todo } from 'shared/interface/routes/recoil/todo.interface';
import ModalCreateTask from './ModalCreateTask';
import useLocalStorage from 'shared/hooks/useLocalStorage';
import { createTodoItem } from 'utils/createTodoItem';

const ModalCreateTaskContainer: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [todoList, setTodoList] = useRecoilState<Todo[]>(selectorTodoList);
  const { setValue } = useLocalStorage();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onHandelSubmit = () => {
    if (inputValue) {
      const newToDoList = createTodoItem(todoList, v4(), inputValue);

      setTodoList(newToDoList);
      setInputValue('');
      setValue('todoList', newToDoList);
      handleClose();
    }
  };

  return (
    <ModalCreateTask
      onHandelSubmit={onHandelSubmit}
      onChangeInput={onChangeInput}
      handleClose={handleClose}
      handleOpen={handleOpen}
      open={open}
    />
  );
};

export default ModalCreateTaskContainer;
