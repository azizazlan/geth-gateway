import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
  },
  projectHdr: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
export default styles;
