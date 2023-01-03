import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import Projects from './Projects/Projects';
import styles from './styles';

function Toolbar(props: any) {
  const { user } = props;
  return (
    <div style={styles.toolbar}>
      <Typography variant="h5">{user.org.name}</Typography>
      <Button variant="contained">create new project</Button>
    </div>
  );
}

export default function Dashboard() {
  const { isSignedIn, user } = useUserSelector(
    (state: UserState) => state.user
  );

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div style={styles.container}>
      <Toolbar user={user} />
      <Projects />
    </div>
  );
}
