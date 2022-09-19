import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import '../../../css/global_styles-old.scss'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  className: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="bmls_primary_btn" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          className="bmls_dialog_title"
          onClose={handleClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent className="bmls_dialog_content">
          <label className="bmls_label">Label</label>
          <input type="text" className="bmls_input" placeholder="placeholder" />
          <label className="bmls_label">Label</label>
          <input type="text" className="bmls_input" placeholder="placeholder" />
          <label className="bmls_label">Label</label>
          <input type="text" className="bmls_input" placeholder="placeholder" />
        </DialogContent>
        <DialogActions className="bmls_dialog_actions">
          <Button className="bmls_outlined_btn">
            Cancel
          </Button>
          <Button className="bmls_primary_btn">
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
