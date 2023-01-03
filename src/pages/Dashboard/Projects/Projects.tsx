import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import ListItemButton from '@mui/material/ListItemButton';
import { useUserDispatch, useUserSelector } from '../../../services/hook';
import { UserState } from '../../../services/store';
import getProjects from '../../../services/thunks/user/getProjects';
import styles from './styles';

export default function Projects() {
  const { projects, user, submissionState } = useUserSelector(
    (state: UserState) => state.user
  );
  const usrDispatch = useUserDispatch();

  useEffect(() => {
    if (projects) {
      return;
    }

    const { id } = user;
    usrDispatch(
      getProjects({
        userId: id,
      })
    );
  }, [projects, user]);

  if (!projects || submissionState === 'PENDING') {
    return <div style={styles.container}>Loading...</div>;
  }

  const listProjects = projects.map((p, i) => {
    return (
      <ListItemButton key={`${p.id}`}>
        <ListItemAvatar>
          <ShapeLineIcon
            color={p.status === 'APPROVED' ? 'primary' : 'inherit'}
          />
        </ListItemAvatar>
        <ListItemText primary={p.name} secondary={p.status} />
      </ListItemButton>
    );
  });

  return (
    <div style={styles.container}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {listProjects}
      </List>
    </div>
  );
}
