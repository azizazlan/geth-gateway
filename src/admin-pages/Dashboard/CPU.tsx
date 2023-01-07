import Card from '@mui/material/Card';

export default function CPU() {
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
        title="CPU"
        src="http://localhost:3000/d-solo/QC1Arp5Wk/geth-dashboard?orgId=1&refresh=30s&from=1673071403982&to=1673073203982&panelId=106"
        width="450"
        height="230"
        style={{ border: '0' }}
      />
    </Card>
  );
}
