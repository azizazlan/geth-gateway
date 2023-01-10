import { Box } from '@mui/material';
import Iframe from '../Iframe/Iframe';
import getWindowDimensions from '../../utils/getWindowDimensions';

const TOKEN = import.meta.env.VITE_APP_GRAFANA_TOKEN;

export default function CPU() {
  const dimension = getWindowDimensions();
  const to = new Date().getTime() - 1 * 60 * 1000; // a minute delay
  const from = to - 60 * 60 * 1000; // last 60 minutes

  return (
    <Box
      sx={{
        minWidth: 255,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Iframe
        iframeTitle="CPU"
        iframeSrc={`http://localhost:3000/d-solo/QC1Arp5Wk/geth-dashboard?orgId=1&refresh=1m&from=${from}&to=${to}&panelId=106`}
        iframeWidth={`${dimension.width - 350}px`}
        iframeHeight="235"
        headers={{
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
      />
    </Box>
  );
}
