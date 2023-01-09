import NumericalWidget from './NumericalWidget';
import ethereum from '../../assets/eth-logo.png';

export default function ActiveEndpoints() {
  return (
    <div>
      <NumericalWidget imgSrc={ethereum} title="Active endpoints" value="1" />
    </div>
  );
}
