import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { useUserDispatch, useUserSelector } from '../../../services/hook';
import { UserState } from '../../../services/store';
import getProjects from '../../../services/thunks/user/getProjects';
import styles from './styles';

export default function Projects() {
  const { projects, user } = useUserSelector((state: UserState) => state.user);
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

  if (!projects) {
    return <div style={styles.container}>Error</div>;
  }

  const listProjects = projects.map((p, i) => {
    return (
      <ListItem key={`${p.id}`}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={p.name} secondary={p.status} />
      </ListItem>
    );
  });

  return (
    <div style={styles.container}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {listProjects}
      </List>
    </div>
  );
}
