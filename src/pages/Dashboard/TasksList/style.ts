import styled from '@emotion/styled';
import { Box } from '@mui/system';

const TaskListBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40vw;
  margin-top: 10vh;
`;

const TaskList = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
`;

export { TaskListBox, TaskList };
