import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type NumericalWidgetProps = {
  title: string;
  value: string;
  showCaution: boolean | undefined;
};

export default function NumberWidget(props: NumericalWidgetProps) {
  const { title, value, showCaution } = props;
  return (
    <Card
      elevation={1}
      sx={{
        minWidth: 115,
        minHeight: 135,
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          marginTop: 1.5,
          fontSize: 14,
          fontWeight: 'bold',
          color: '#2f3640',
        }}
      >
        {title}
      </Typography>
      {showCaution ? (
        <Typography
          sx={{
            marginTop: 2,
            fontWeight: 'bold',
            fontSize: 47,
            color: '#e84118',
          }}
        >
          {value}
        </Typography>
      ) : (
        <Typography
          sx={{
            marginTop: 2,
            fontWeight: 'bold',
            fontSize: 47,
          }}
        >
          {value}
        </Typography>
      )}
    </Card>
  );
}
