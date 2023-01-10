import CardIframe from '../Iframe/CardIframe';

const TOKEN = import.meta.env.VITE_APP_GRAFANA_TOKEN;

export default function LatestReceiptWidget() {
  const to = new Date().getTime() - 1 * 60 * 1000; // a minute delay
  const from = to - 60 * 60 * 1000; // last 60 minutes

  return (
    <CardIframe
      iframeTitle="Latest receipt"
      iframeSrc={`http://localhost:3000/d-solo/QC1Arp5Wk/geth-dashboard?orgId=1&refresh=1m&from=${from}&to=${to}&panelId=111`}
      iframeWidth="155"
      iframeHeight="125"
      headers={{
        Authorization: `Bearer ${TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }}
    />
  );
}
