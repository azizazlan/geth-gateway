import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    border: '1pt solid blue',
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  tableDiv: {
    marginTop: theme.spacing(3),
  },
};
export default styles;
