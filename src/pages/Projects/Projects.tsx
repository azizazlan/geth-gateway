import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import ListItemButton from '@mui/material/ListItemButton';
import { Navigate, useNavigate } from 'react-router-dom';
import { useUserDispatch, useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import getProjects from '../../services/thunks/user/getProjects';
import styles from './styles';
import ProjectHeader from './ProjectHeader';

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
    return <div style={styles.container}>Loading...</div>;
  }

  const listProjects = projects.map((project, i) => {
    const { id } = project;

    const handleClick = ({ projectId }: { projectId: string }) => {
      navigate(`/projects/${projectId}`);
    };

    return (
      <ListItemButton
        key={`${id}`}
        onClick={() => handleClick({ projectId: id })}
      >
        <ListItemAvatar>
          <ShapeLineIcon
            color={project.status === 'APPROVED' ? 'primary' : 'inherit'}
          />
        </ListItemAvatar>
        <ListItemText primary={project.name} secondary={project.status} />
      </ListItemButton>
    );
  });

  return (
    <div style={styles.container}>
      <ProjectHeader orgName={user.org.name} />
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {listProjects}
      </List>
    </div>
  );
}
