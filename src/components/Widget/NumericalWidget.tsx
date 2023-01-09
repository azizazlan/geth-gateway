import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

type NumericalWidgetProps = {
  title: string;
  value: string;
  imgSrc: string;
  warning: boolean;
};

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(2),
  height: theme.spacing(2),
  justifyContent: 'center',
  marginTop: theme.spacing(3.5),
}));

export default function NumericalWidget(props: NumericalWidgetProps) {
  const { title, value, warning, imgSrc } = props;
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
          color: 'black',
          fontWeight: 'bold',
          color: '#2f3640',
        }}
      >
        {title}
      </Typography>
      {warning ? (
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
