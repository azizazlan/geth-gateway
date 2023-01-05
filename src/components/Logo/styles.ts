import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
    margin: theme.spacing(1),
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: theme.spacing(1),
  },
  logo: {
    width: '57px',
    height: 'auto',
  },
};
export default styles;
