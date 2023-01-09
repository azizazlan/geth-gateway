import { Card } from '@mui/material';
import PieChart from '../../components/Chart/PieChart';
import data from './dummyStorageData';

export default function StoragePieChart() {
  return (
    <Card
      elevation={0}
      sx={{
        width: 400,
        height: 235,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PieChart data={data} />
    </Card>
  );
}
