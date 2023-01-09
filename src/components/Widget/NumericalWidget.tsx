import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button, CardActions } from '@mui/material';

type NumericalWidgetProps = {
  title: string;
  value: string;
  imgSrc: string;
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
  const { title, value, imgSrc } = props;
  return (
    <Card
      sx={{
        minWidth: 215,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledIcon>
        <img src={imgSrc} alt="Eth logo" />
      </StyledIcon>
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: 27 }}>
          {value}
        </Typography>
        <Typography
          sx={{ fontSize: 14, color: 'grey', fontFamily: 'Oswald' }}
          gutterBottom
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          details
        </Button>
      </CardActions>
    </Card>
  );
}