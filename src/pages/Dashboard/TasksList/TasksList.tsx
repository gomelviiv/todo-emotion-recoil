import React from 'react';
import { TaskList, TaskListBox } from './style';
import Task from 'shared/components/Task';
import { ModalCreateTask } from 'shared/components';
import { Todo } from 'shared/interface/routes/recoil/todo.interface';

interface Props {
  todoList: Todo[];
}

const TasksList: React.FC<Props> = ({ todoList }) => {
  return (
    <TaskListBox>
      <ModalCreateTask />
      <TaskList>
        {!!todoList &&
          !!todoList.length &&
          todoList.map((taskInfo) => (
            <Task key={taskInfo.id} taskInfo={taskInfo} />
          ))}
      </TaskList>
    </TaskListBox>
  );
};

export default TasksList;
