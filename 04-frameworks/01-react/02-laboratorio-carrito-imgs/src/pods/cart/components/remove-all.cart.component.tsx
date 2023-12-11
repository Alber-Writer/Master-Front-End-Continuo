import * as React from 'react';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RemoveIcon from "@mui/icons-material/PlaylistRemove";


interface Props{
  children?: React.ReactNode;
  removeAction: ()=>void;
}

export const RemoveAllBtnModal: React.FC<Props> = (props:Props)=> {
  const {removeAction} = props;
  const [IsVisible, setIsVisibile] = React.useState(false);

  const handleClickOpen = () => {
    setIsVisibile(true);
  };

  const handleClose = () => {
    setIsVisibile(false);
  };

  const handleRemoval = ()=>{
    removeAction();
    handleClose();
  }

  return (
    <>
      <Button
          role="button"
          variant="outlined"
          color="secondary"
          onClick={handleClickOpen}
          sx={{ maxWidth: "250px" }}
        >
          <RemoveIcon /> Remove all
        </Button>
      <MuiDialog
        open={IsVisible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove All Products?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove all products from your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="warning" onClick={handleRemoval}>Remove All</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </MuiDialog>
    </>
  );
}
