import Card from '@mui/material/Card';

export default function DiskUsages() {
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
      <iframe
        title="Disk Usage"
        src="http://localhost:3000/d-solo/QC1Arp5Wk/geth-dashboard?orgId=1&refresh=30s&from=1673071276788&to=1673071576788&panelId=85"
        width="450"
        height="230"
        style={{ border: '0' }}
      />
    </Card>
  );
}
