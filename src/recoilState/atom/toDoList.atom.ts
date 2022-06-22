import { atom, selector } from 'recoil';
import useLocalStorage from 'shared/hooks/useLocalStorage';
import { Todo } from 'shared/interface/routes/recoil/todo.interface';

export const toDoListAtom = atom<Todo[]>({
  key: 'toDoListAtom',
  default: [],
});

export const selectorTodoList = selector({
  key: 'selectorTodoList',

  get({ get }) {
    const { getValue } = useLocalStorage();
    const toDoList = get(toDoListAtom);
    return !!toDoList.length ? toDoList : getValue('todoList') || [];
  },
  set({ set }, newValue) {
    set(toDoListAtom, newValue);
  },
});
