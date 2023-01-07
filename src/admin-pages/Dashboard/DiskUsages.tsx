import Card from '@mui/material/Card';
import Iframe from '../../components/Iframe/Iframe';

export default function DiskUsages() {
  const to = new Date().getTime() - 1 * 60 * 1000; // a minute delay
  const from = to - 30 * 60 * 1000;
  const token =
    'U58eyE3gt6Hqdd1dzLI2Q3TBPh7H-Kz3xBHdm_vrrjDa1LEfv8ma6wSk3uOzbJKDNLAOkKk5P9M4Pv7esTAJNg==';

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
        iframeSrc={`http://localhost:3000/d-solo/QC1Arp5Wk/geth-dashboard?orgId=1&refresh=30s&from=${from}&to=${to}&panelId=85`}
        iframeWidth="450"
        iframeHeight="250"
        headers={{
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
      />
    </Card>
  );
}
