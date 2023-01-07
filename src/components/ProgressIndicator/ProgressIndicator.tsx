import { Backdrop, CircularProgress } from '@mui/material';

type LoaderProps = {
  open: boolean;
  handleClose: () => void;
};

export default function ProgressIndicator(props: LoaderProps) {
  const { open, handleClose } = props;

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
