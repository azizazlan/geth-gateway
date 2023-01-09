import NumericalWidget from './NumericalWidget';
import ethereum from '../../assets/eth-logo.png';

export default function ActiveNodes() {
  return (
    <div>
      <NumericalWidget
        imgSrc={ethereum}
        title="Active / Total nodes"
        value="4/5"
      />
    </div>
  );
}
