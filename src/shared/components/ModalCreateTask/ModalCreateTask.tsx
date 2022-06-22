import React from 'react';
import { Button, Modal, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { AddingTask, ModalClassName } from './style';

interface Props {
  handleOpen: () => void;
  handleClose: () => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onHandelSubmit: () => void;
  open: boolean;
}

const ModalCreateTask: React.FC<Props> = ({
  handleOpen,
  open,
  onHandelSubmit,
  handleClose,
  onChangeInput,
}) => {
  return (
    <div>
      <AddingTask onClick={handleOpen}>
        <AddCircleOutlineIcon />
        <label className="add-new-task-text"> Add New Task</label>
      </AddingTask>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalClassName>
          <>
            <Typography
              id="modal-modal-title"
              className="title-modal-create-task"
              variant="h6"
              component="h2"
            >
              Enter the name of the task:
            </Typography>
            <TextField
              className="input-adding-task"
              variant="standard"
              focused
              onChange={onChangeInput}
            />
          </>

          <Button
            variant="contained"
            onClick={onHandelSubmit}
            className="button-create-task"
          >
            Create
          </Button>
        </ModalClassName>
      </Modal>
    </div>
  );
};

export default ModalCreateTask;
