import NumericalWidget from '../../components/Dashboard/NumericalWidget';
import bungaRaya from '../../assets/outlined-logo.png';

function Projects() {
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

export default Projects;
