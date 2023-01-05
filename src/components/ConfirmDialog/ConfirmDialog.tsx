/* eslint-disable no-console */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useUserDispatch, useUserSelector } from '../../services/hook';
import deleteProject from '../../services/thunks/user/deleteProject';
import { UserState } from '../../services/store';

type ConfirmDialogProps = {
  open: boolean;
  projectId: string | undefined;
  handleClose: () => void;
  action: 'DELETE_PROJECT' | 'CREATE_PROJECT' | 'UPDATE_PROJECT';
};

export default function ConfirmDialog(props: ConfirmDialogProps) {
  const userDispatch = useUserDispatch();
  const { user } = useUserSelector((state: UserState) => state.user);

  const userId = user.id;

  const { open, handleClose, action, projectId } = props;

  const handleConfirm = () => {
    if (action === 'DELETE_PROJECT' && projectId) {
      userDispatch(
        deleteProject({
          userId,
          projectId,
        })
      );
    }
    handleClose();
  };

  if (action === 'DELETE_PROJECT') {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">DELETE PROJECT</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete project can not be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleConfirm}
            autoFocus
          >
            delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">DELETE PROJECT</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClose}
          autoFocus
        >
          delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
