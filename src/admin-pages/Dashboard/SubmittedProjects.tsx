import NumericalWidget from '../../components/Dashboard/NumericalWidget';
import bungaRaya from '../../assets/outlined-logo.png';

function SubmittedProjects() {
  return (
    <div>
      <NumericalWidget
        imgSrc={bungaRaya}
        title="Submitted projects"
        value={10}
      />
    </div>
  );
}

export default SubmittedProjects;
