import { Box } from '@mui/material';
import Iframe from '../Iframe/Iframe';

const TOKEN = import.meta.env.VITE_APP_GRAFANA_TOKEN;

export default function Memory() {
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
        iframeTitle="Memory"
        iframeSrc={`http://localhost:3000/d-solo/QC1Arp5Wk/geth-dashboard?orgId=1&refresh=1m&from=${from}&to=${to}&panelId=107`}
        iframeWidth="395"
        iframeHeight="270"
        headers={{
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
      />
    </Box>
  );
}
