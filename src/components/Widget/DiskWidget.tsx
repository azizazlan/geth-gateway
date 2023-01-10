import Card from '@mui/material/Card';
import Iframe from '../Iframe/Iframe';

const TOKEN = import.meta.env.VITE_APP_GRAFANA_TOKEN;

export default function Disk() {
  const to = new Date().getTime() - 1 * 60 * 1000; // a minute delay
  const from = to - 30 * 60 * 1000;

  return (
    <Card
      sx={{
        minWidth: 255,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Iframe
        iframeTitle="Disk"
        iframeSrc={`http://localhost:3000/d-solo/QC1Arp5Wk/geth-dashboard?orgId=1&refresh=1m&from=${from}&to=${to}&panelId=106`}
        iframeWidth="450"
        iframeHeight="250"
        headers={{
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
      />
    </Card>
  );
}
