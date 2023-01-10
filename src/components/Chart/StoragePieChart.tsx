import { Card, Typography } from '@mui/material';
import PieChart from './PieChart';
import data from '../../admin-pages/Dashboard/dummyStorageData';

export default function StoragePieChart() {
  return (
    <Card
      elevation={0}
      sx={{
        width: 400,
        height: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: -3, fontWeight: 'bold' }}>
        Disk
      </Typography>
      <PieChart data={data} />
    </Card>
  );
}
