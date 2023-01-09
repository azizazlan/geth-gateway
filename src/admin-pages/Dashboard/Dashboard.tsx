import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import ActiveNodesWidget from '../../components/Widget/ActiveNodesWidget';
import ActiveEndpointsWidget from '../../components/Widget/ActiveEndpointsWidget';
import ApprovedProjectsWidget from '../../components/Widget/ApprovedProjectsWidget';
import styles from './styles';
import LatestBlockWidget from '../../components/Widget/LatestBlockWidget';
import LatestReceiptWidget from '../../components/Widget/LatestReceiptWidget';
import StoragePieChart from './StoragePieChart';
import CpuWidget from '../../components/Widget/CpuWidget';
import SubmittedProjectsWidget from '../../components/Widget/SubmittedProjectsWidget';
import TotalNodesWidget from '../../components/Widget/TotalNodesWidget';
import MemoryWidget from '../../components/Widget/MemoryWidget';

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
        columns={{ xs: 4, sm: 8, md: 15 }}
      >
        <Grid item xs={2} sm={4} md={3} key="ApprovedProjects">
          <SubmittedProjectsWidget />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="ApprovedProjects">
          <ApprovedProjectsWidget />
        </Grid>
      </Grid>
      <Box sx={{ minHeight: 21 }} />
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 15 }}
      >
        <Grid item xs={2} sm={4} md={3} key="ActiveEndpoints">
          <ActiveEndpointsWidget />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="ActiveNodes">
          <ActiveNodesWidget />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="TotalNodes">
          <TotalNodesWidget />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key="LatestBlockWidget">
          <LatestBlockWidget />
        </Grid>
      </Grid>
      <Box sx={{ minHeight: 21 }} />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box>
          <MemoryWidget />
        </Box>

        <Box>
          <StoragePieChart />
        </Box>
      </Box>
      <Box sx={{ minHeight: 3 }} />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ flexGrow: 1 }}>
          <CpuWidget />
        </Box>
      </Box>
    </div>
  );
}
