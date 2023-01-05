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
    alignItems: 'center',
    minHeight: theme.spacing(15),
  },
  alertDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  buttons: {
    minWidth: theme.spacing(19),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
export default styles;
