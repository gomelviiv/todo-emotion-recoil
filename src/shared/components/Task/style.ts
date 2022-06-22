import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';
import { Box } from '@mui/system';

const TaskBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 15px;

  .delete-icon {
    color: #1e9cea;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;

const TaskText = styled.p<{ isCompleted: boolean }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #5e5e5e;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`;

const TaskCheckbox = styled(Checkbox)`
  width: 25px;
  color: #1e9cea;
  height: 25px;

  &.Mui-checked: {
    color: #1e9cea,
  },
`;

export { TaskBox, TaskCheckbox, TaskText };
