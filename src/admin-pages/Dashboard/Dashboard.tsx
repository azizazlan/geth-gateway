import { Navigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
import TotalNodes from './TotalNodes';
import Endpoints from './Endpoints';

export default function Dashboard() {
  const { isSignedIn } = useAdminSelector((state: AdminState) => state.admin);

  if (!isSignedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div style={styles.container}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3} key="TotalNodes">
          <Endpoints />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="TotalNodes">
          <TotalNodes />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="ActiveNodes">
          <ActiveNodes />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="Projects">
          <SubmittedProjects />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="ApprovedProjects">
          <ApprovedProjects />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="Organizations">
          <Organizations />
        </Grid>
      </Grid>
    </div>
  );
}
