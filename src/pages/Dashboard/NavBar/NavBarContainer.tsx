import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectorTodoList } from 'recoilState/atom/toDoList.atom';
import useLocalStorage from 'shared/hooks/useLocalStorage';
import NavBar from './NavBar';

const NavBarContainer: React.FC = () => {
  const todoList = useRecoilValue(selectorTodoList);
  const { removeValue } = useLocalStorage();

  const logout = () => {
    removeValue('todoList');
  };

  return <NavBar logout={logout} todoList={todoList} />;
};

export default NavBarContainer;
