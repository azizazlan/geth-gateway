import { Link } from 'react-router-dom';
import styles from './styles';

export default function Logo() {
  return (
    <div style={styles.container}>
      <Link to="/">
        <div>geth-gateway</div>
        <div>MAMPU Ethereum Network</div>
      </Link>
    </div>
  );
}
