import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PieChart from '../../components/Chart/PieChart';
import data from './dummyStorageData';

export default function StoragePieChart() {
  return (
    <Box sx={{ width: '375px', height: '275px' }}>
      <PieChart data={data} />
    </Box>
  );
}
