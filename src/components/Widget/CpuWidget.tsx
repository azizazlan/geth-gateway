import { Box } from '@mui/material';
import Iframe from '../Iframe/Iframe';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function CPU() {
  const dimension = getWindowDimensions();
  const to = new Date().getTime() - 1 * 60 * 1000; // a minute delay
  const from = to - 60 * 60 * 1000; // last 60 minutes
  const token =
    'U58eyE3gt6Hqdd1dzLI2Q3TBPh7H-Kz3xBHdm_vrrjDa1LEfv8ma6wSk3uOzbJKDNLAOkKk5P9M4Pv7esTAJNg==';

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
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
      />
    </Box>
  );
}
