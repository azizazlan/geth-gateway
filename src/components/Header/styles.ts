import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  toolbarInnerDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  logoDiv: {
    flexGrow: 1,
  },
  indexDiv: {
    minWidth: theme.spacing(45),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  lngBtnDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lngIconBtn: {
    color: 'white',
  },
};
export default styles;
