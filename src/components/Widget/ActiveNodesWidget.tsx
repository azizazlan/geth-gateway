import NumericalWidget from './NumericalWidget';
import ethereum from '../../assets/eth-logo.png';

export default function ActiveNodes() {
  return (
    <div>
      <NumericalWidget warning imgSrc={ethereum} title="Active nodes" value="4" />
    </div>
  );
}
