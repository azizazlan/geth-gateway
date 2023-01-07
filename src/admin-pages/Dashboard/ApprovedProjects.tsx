import NumericalWidget from '../../components/Dashboard/NumericalWidget';
import bungaRaya from '../../assets/outlined-logo.png';

export default function ApprovedProjects() {
  return (
    <div>
      <NumericalWidget imgSrc={bungaRaya} title="Approved projects" value={3} />
    </div>
  );
}
