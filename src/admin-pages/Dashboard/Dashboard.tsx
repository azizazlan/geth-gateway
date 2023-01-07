import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import SubmittedProjects from './SubmittedProjects';
import ApprovedProjects from './ApprovedProjects';
import Organizations from './Organizations';
import ActiveNodes from './ActiveNodes';
import Nodes from './Nodes';
import styles from './styles';
import TotalNodes from './TotalNodes';
import Endpoints from './Endpoints';
import DiskUsages from './DiskUsages';
import CPU from './CPU';

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
        <Grid item xs={2} sm={4} md={3} key="Endpoints">
          <Endpoints />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="TotalNodes">
          <TotalNodes />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="ActiveNodes">
          <ActiveNodes />
        </Grid>
        <Grid item xs={2} sm={4} md={4} key="CPU">
          <CPU />
        </Grid>
        <Grid item xs={2} sm={4} md={4} key="DiskUsages">
          <DiskUsages />
        </Grid>
        <Grid item xs={12} sm={12} md={12} key="Nodes">
          <Nodes />
        </Grid>
      </Grid>
    </div>
  );
}
