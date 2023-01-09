import NumericalWidget from './NumericalWidget';
import bungaRaya from '../../assets/outlined-logo.png';

export default function ApprovedProjects() {
  return (
    <div>
      <NumericalWidget
        imgSrc={bungaRaya}
        title="Approved / Submitted projects"
        value="2/3"
      />
    </div>
  );
}
