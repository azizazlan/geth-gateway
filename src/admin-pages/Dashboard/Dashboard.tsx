import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import OrganizationsWidget from '../../components/Widget/OrganizationsWidget';
import ActiveNodesWidget from '../../components/Widget/ActiveNodesWidget';
import ActiveEndpointsWidget from '../../components/Widget/ActiveEndpointsWidget';
import ApprovedProjectsWidget from '../../components/Widget/ApprovedProjectsWidget';
import Nodes from './Nodes';
import styles from './styles';

export default function Dashboard() {
  const { isSignedIn } = useAdminSelector((state: AdminState) => state.admin);

  if (!isSignedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div style={styles.container}>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3} key="ActiveEndpoints">
          <ActiveEndpointsWidget />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="ActiveNodes">
          <ActiveNodesWidget />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="ApprovedProjects">
          <ApprovedProjectsWidget />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="Organizations">
          <OrganizationsWidget />
        </Grid>
        <Grid item xs={12} sm={12} md={12} key="Nodes">
          <Nodes />
        </Grid>
      </Grid>
    </div>
  );
}
