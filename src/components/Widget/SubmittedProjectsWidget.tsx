import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import NumberWidget from './NumberWidget';

export default function SubmittedProjects() {
  const { projects } = useAdminSelector((state: AdminState) => state.admin);
  const value = projects ? projects.length : 0;
  return (
    <NumberWidget
      title="Submitted projects"
      value={value}
      showCaution={false}
    />
  );
}
