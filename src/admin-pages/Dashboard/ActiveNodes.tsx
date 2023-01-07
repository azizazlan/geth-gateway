import NumericalWidget from '../../components/Dashboard/NumericalWidget';
import ethereum from '../../assets/eth-logo.png';

export default function ActiveNodes() {
  return (
    <div>
      <NumericalWidget imgSrc={ethereum} title="Active nodes" value={5} />
    </div>
  );
}
