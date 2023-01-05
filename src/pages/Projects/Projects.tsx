import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import ListItemButton from '@mui/material/ListItemButton';
import { Navigate, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { useUserDispatch, useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import getProjects from '../../services/thunks/user/getProjects';
import styles from './styles';
import ProjectHeader from './ProjectHeader';
import theme from '../../theme';

export default function Projects() {
  const navigate = useNavigate();
  const { projects, user, submissionState } = useUserSelector(
    (state: UserState) => state.user
  );
  const usrDispatch = useUserDispatch();

  useEffect(() => {
    if (projects || !user) {
      return;
    }

    const { id } = user;
    usrDispatch(
      getProjects({
        userId: id,
      })
    );
  }, [projects, user]);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (!projects || submissionState === 'PENDING') {
    return <div style={styles.loadingContainer}>Loading...</div>;
  }

  let no = 0;
  const listProjects = projects.map((project, i) => {
    if (project.isDeleted) {
      return null;
    }

    no += 1;

    const { id } = project;

    const handleClick = ({ projectId }: { projectId: string }) => {
      navigate(`/projects/${projectId}`);
    };

    return (
      <div key={`${id}`} style={styles.listItem}>
        <Typography>{no}</Typography>
        <ListItemButton
          key={`${id}`}
          onClick={() => handleClick({ projectId: id })}
        >
          <ListItemAvatar>
            <ShapeLineIcon
              color={project.status === 'APPROVED' ? 'secondary' : 'inherit'}
            />
          </ListItemAvatar>
          <ListItemText primary={project.name} secondary={project.status} />
        </ListItemButton>
        <Divider />
      </div>
    );
  });

  return (
    <div style={styles.container}>
      <ProjectHeader orgName={user.org.name} />
      <List
        sx={{
          marginLeft: `${theme.spacing(3)}`,
          marginRight: `${theme.spacing(3)}`,
          bgcolor: 'background.paper',
        }}
      >
        {listProjects}
      </List>
    </div>
  );
}
