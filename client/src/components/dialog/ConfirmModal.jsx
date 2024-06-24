import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

const ConfirmModal = ({
  open,
  handleClose,
  confirmHandler,
  title,
  body,
  yesBtnColor
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{body}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          No
        </Button>
        <Button color={yesBtnColor} onClick={confirmHandler}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
