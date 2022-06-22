import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskBox, TaskCheckbox, TaskText } from './style';
import { Todo } from 'shared/interface/routes/recoil/todo.interface';

interface Props {
  taskInfo: Todo;
  onHandleCompleted(id: string): void;
  onHandleDelete(id: string): void;
}

const Task: React.FC<Props> = ({
  taskInfo,
  onHandleCompleted,
  onHandleDelete,
}) => {
  return (
    <TaskBox>
      <DeleteIcon
        onClick={() => onHandleDelete(taskInfo.id)}
        className="delete-icon"
      />
      <TaskCheckbox
        checked={taskInfo.isCompleted}
        onChange={() => onHandleCompleted(taskInfo.id)}
      />
      <TaskText isCompleted={taskInfo.isCompleted}>{taskInfo.title}</TaskText>
    </TaskBox>
  );
};

export default Task;
