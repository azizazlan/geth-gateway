import NumericalWidget from '../../components/Dashboard/NumericalWidget';
import ethereum from '../../assets/eth-logo.png';

export default function Endpoints() {
  return (
    <div>
      <NumericalWidget imgSrc={ethereum} title="Endpoints" value={1} />
    </div>
  );
}
