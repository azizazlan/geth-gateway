import NumericalWidget from '../../components/Dashboard/NumericalWidget';
import orgLogo from '../../assets/org-logo.png'

export default function Organizations() {
  return (
    <div>
      <NumericalWidget imgSrc={orgLogo} title="No of organizations" value={2} />
    </div>
  );
}
