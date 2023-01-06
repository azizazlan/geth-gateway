import { Navigate } from 'react-router-dom';
import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import SubmittedProjects from './SubmittedProjects';
import ApprovedProjects from './ApprovedProjects';
import Organizations from './Organizations';
import ActiveNodes from './ActiveNodes';
import DiskUsages from './DiskUsages';
import RamUsages from './RamUsages';
import Nodes from './Nodes';
import styles from './styles';

export default function Dashboard() {
  const { isSignedIn } = useAdminSelector((state: AdminState) => state.admin);

  if (!isSignedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.columnn}>
          <SubmittedProjects />
        </div>
        <div style={styles.columnn}>
          <ApprovedProjects />
        </div>
        <div style={styles.columnn}>
          <Organizations />
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.columnn}>
          <ActiveNodes />
        </div>
        <div style={styles.columnn}>
          <DiskUsages />
        </div>
        <div style={styles.columnn}>
          <RamUsages />
        </div>
      </div>
      <div>
        <Nodes />
      </div>
    </div>
  );
}
