import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
  },
  loadingContainer: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};
export default styles;
