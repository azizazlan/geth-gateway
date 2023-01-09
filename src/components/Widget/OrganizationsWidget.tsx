import NumericalWidget from './NumericalWidget';
import orgLogo from '../../assets/org-logo.png';

export default function OrganizationsWidget() {
  return (
    <div>
      <NumericalWidget
        imgSrc={orgLogo}
        title="No of organizations(clients)"
        value="2"
      />
    </div>
  );
}
