import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(9),
    backgroundColor: '#fc5c65',
    background: 'linear-gradient(to right, #FFC312, #fc5c65)',
    height: '675px',
  },
  topHeadlineText: {
    marginLeft: theme.spacing(0.7),
    color: 'black',
  },
  subHeadlineText: {
    marginLeft: theme.spacing(0.7),
    color: 'black',
  },
  leftColumn: {
    margin: theme.spacing(3),
    paddingTop: theme.spacing(5),
    maxWidth: '357px',
    color: 'black',
  },
  rightColumn: {
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(5),
  },
  orgDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  howToStartDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
};
export default styles;
