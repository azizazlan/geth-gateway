import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: theme.spacing(13),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  formContainer: {
    marginBottom: theme.spacing(3),
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};
export default styles;
