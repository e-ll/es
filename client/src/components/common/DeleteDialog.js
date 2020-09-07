import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button} from '@material-ui/core';

const DeleteDialog = ({ openDeleteDialog, handleClose, onDeleteClick }) => {
  return (
    <div>
      <Dialog
        open={openDeleteDialog}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверены что хотите удалить этот стенд?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDeleteClick} color="primary">
            Да
          </Button>
          <Button onClick={handleClose} color="primary">
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;