/* eslint-disable no-console */
import { FormControl, TextField } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import styles from './styles';

export default function Project() {
  const params = useParams();
  const { projectId } = params;

  const { projects } = useUserSelector((state: UserState) => state.user);

  if (!projects) {
    return <div style={styles.container}>Error</div>;
  }

  const project = projects.filter(
    (p) => p.id === parseInt(`${projectId}`, 10)
  )[0];

  return (
    <div style={styles.container}>
      <Link to="/projects">Projects</Link>
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
      <Link to={`/projects/edit/${projectId}`}>Edit</Link>
    </div>
  );
}
