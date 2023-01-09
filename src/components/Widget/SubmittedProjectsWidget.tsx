import NumericalWidget from './NumericalWidget';
import bungaRaya from '../../assets/outlined-logo.png';

export default function SubmittedProjects() {
  return (
    <div>
      <NumericalWidget
        imgSrc={bungaRaya}
        title="Submitted projects"
        value="51"
      />
    </div>
  );
}
