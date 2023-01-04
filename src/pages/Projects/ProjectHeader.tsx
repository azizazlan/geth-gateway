import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './styles';

type ProjectHeaderProps = {
  orgName: string;
};

export default function ProjectHeader(props: ProjectHeaderProps) {
  const { orgName } = props;
  return (
    <div style={styles.projectHdr}>
      <Typography variant="h5">{orgName}</Typography>
      <Button component={Link} to="/projects/new" variant="contained">
        create new project
      </Button>
    </div>
  );
}
