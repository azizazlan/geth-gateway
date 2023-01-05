/* eslint-disable no-console */
import Snackbar from '@mui/material/Snackbar';
import InputAdornment from '@mui/material/InputAdornment';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import styles from './styles';

export default function Project() {
  const [copiedClipboardDev, setCopiedClipboardDev] = useState(false);
  const [copiedClipboardPro, setCopiedClipboardPro] = useState(false);
  const params = useParams();
  const { projectId } = params;

  const { projects } = useUserSelector((state: UserState) => state.user);

  if (!projects) {
    return <div style={styles.container}>Error</div>;
  }

  const project = projects.filter(
    (p) => p.id === parseInt(`${projectId}`, 10)
  )[0];

  const devEndpoint = `${import.meta.env.VITE_APP_DEV_ENDPOINT}/${
    project.apiKey ? project.apiKey : '[APIKEY]'
  }`;

  const proEndpoint = `${import.meta.env.VITE_APP_PRO_ENDPOINT}/${
    project.apiKey ? project.apiKey : '[APIKEY]'
  }`;

  const handleCopyToClipboardDev = (text: string) => {
    setCopiedClipboardDev(true);
    navigator.clipboard.writeText(text);
  };

  const handleCopyToClipboardPro = (text: string) => {
    setCopiedClipboardPro(true);
    navigator.clipboard.writeText(text);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setCopiedClipboardDev(false);
    setCopiedClipboardPro(false);
  };

  return (
    <div style={styles.container}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={copiedClipboardDev}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert icon={false} color="success">
          Development endpoint has been copied to clipboard!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={copiedClipboardPro}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert icon={false} color="success">
          Production endpoint has been copied to clipboard!
        </Alert>
      </Snackbar>
      <FormControl fullWidth margin="normal">
        <TextField label="Name" value={project.name} />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField label="Description" value={project.description} />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="API Key"
          value={`${project.apiKey ? project.apiKey : 'PENDING'}`}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">Developement</InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleCopyToClipboardDev(devEndpoint)}
                onMouseDown={() => handleCopyToClipboardDev(devEndpoint)}
                edge="end"
              >
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          }
          value={devEndpoint}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">Production</InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleCopyToClipboardPro(proEndpoint)}
                onMouseDown={() => handleCopyToClipboardPro(proEndpoint)}
                edge="end"
              >
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          }
          value={proEndpoint}
        />
      </FormControl>
      <div style={styles.bottomDiv}>
        <div style={styles.alertDiv} />
        <div style={styles.buttons}>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/projects"
          >
            close
          </Button>
          <Button
            color="secondary"
            variant="contained"
            component={Link}
            to={`/projects/edit/${projectId}`}
          >
            edit
          </Button>
        </div>
      </div>
    </div>
  );
}
