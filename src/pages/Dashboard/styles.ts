import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(12),
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
export default styles;
