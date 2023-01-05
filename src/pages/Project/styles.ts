import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  formContainer: {
    marginBottom: theme.spacing(3),
  },
  bottomDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(3),
  },
  leftButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  rightButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  divider: {
    width: theme.spacing(1),
  },
};
export default styles;
