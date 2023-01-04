import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  toolbarInnerDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoDiv: {
    flexGrow: 1,
  },
  indexDiv: {
    minWidth: theme.spacing(27),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    color: 'white',
  },
};
export default styles;
