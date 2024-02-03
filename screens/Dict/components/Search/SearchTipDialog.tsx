import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export function SearchTipDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title='Delete'>
        <IconButton onClick={handleClickOpen}>
          <HelpIcon />
        </IconButton>
      </Tooltip>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle id='help' onClose={handleClose}>
          Search tips
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {`This dictionary support appromixate word search. You don't have to type the exact word
            you're searching for. You can type "a" for "ā", n for "ñ" etc.`}
          </Typography>
          <Typography gutterBottom>
            {`For example, if you want to search for "ajā", you can just type "aja"`}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
