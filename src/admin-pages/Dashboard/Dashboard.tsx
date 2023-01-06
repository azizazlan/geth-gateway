import { Navigate } from 'react-router-dom';
import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import styles from './styles';

export default function Dashboard() {
  const { isSignedIn } = useAdminSelector((state: AdminState) => state.admin);

  if (!isSignedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div style={styles.container}>A secured dashboard for admin eyes ONLY!</div>
  );
}
