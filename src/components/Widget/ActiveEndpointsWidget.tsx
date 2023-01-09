import NumericalWidget from './NumericalWidget';
import ethereum from '../../assets/eth-logo.png';

export default function ActiveEndpoints() {
  return (
    <div>
      <NumericalWidget
        imgSrc={ethereum}
        title="Active / Total Endpoints"
        value="1/1"
      />
    </div>
  );
}
