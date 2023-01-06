import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: theme.spacing(13),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    border: '1pt solid red',
    justifyContent: 'space-between',
  },
  column: {
    border: '1pt solid blue',
  },
};
export default styles;
