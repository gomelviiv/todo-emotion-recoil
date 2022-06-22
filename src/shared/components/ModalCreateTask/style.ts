import styled from '@emotion/styled';
import { Box } from '@mui/system';

const AddingTask = styled.button`
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #b47aea;
  cursor: pointer;
  padding: 5px 10px;
  border: 2px solid #5e5e5e00;

  &:hover {
    text-decoration: underline;
  }

  .add-new-task-text {
    margin-left: 10px;
    cursor: pointer;
  }
`;

const ModalClassName = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: white;
  padding: 40px;

  .title-modal-create-task {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #5e5e5e;
    margin-bottom: 30px;
  }

  .input-adding-task {
    width: 100%;
    margin-bottom: 30px;

    .MuiInputBase-root {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #b47aea;

      &::after {
        color: #b47aea;
        background: #b47aea;
        border-color: #b47aea !important;
      }
      &:focus {
        color: #b47aea;
      }
    }
  }

  .MuiButton-root.button-create-task {
    background-color: #b47aea;
    color: white;
    font-family: 'Inter';
    font-style: normal;
    line-height: 29px;
    border: 1px #b47aea solid
    box-shadow: 2px 2px 8px #933ae7;

    &:hover {
        box-shadow: 0px 0px 20px #933ae7;
        background: #b47ae !important;
      }
  }
`;

export { AddingTask, ModalClassName };
