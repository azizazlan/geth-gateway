import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
  },
  loadingContainer: {
    width: '100%',
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(3),
  },
  projectHdr: {
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};
export default styles;
