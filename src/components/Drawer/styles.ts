import theme from '../../theme';

const styles: { [key: string]: React.CSSProperties } = {
  drawerHdr: {
    minWidth: '175px',
    alignItems: 'start',
    display: 'flex',
  },
  menusContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  profileContainer: {
    minHeight: '95px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    marginBottom: 1,
  },
  footer: {
    margin: 3,
  },
};
export default styles;
