import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import Projects from './Projects/Projects';
import styles from './styles';

export default function Dashboard() {
  const { isSignedIn } = useUserSelector((state: UserState) => state.user);

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div style={styles.container}>
      TODO: Add CREATE, DELETE, EDIT project buttons
      <Projects />
    </div>
  );
}
