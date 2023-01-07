import NumericalWidget from '../../components/Dashboard/NumericalWidget';
import ethereum from '../../assets/eth-logo.png';

export default function TotalNodes() {
  return (
    <div>
      <NumericalWidget imgSrc={ethereum} title="Total nodes" value={7} />
    </div>
  );
}
