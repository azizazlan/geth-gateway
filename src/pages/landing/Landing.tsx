import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import Montage from '../../components/Montage/Montage';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import styles from './styles';

export default function Landing() {
  const { t } = useTranslation();
  const { user } = useUserSelector((state: UserState) => state.user);

  if (user) {
    return <Navigate to="/projects" />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.headline}>
        <Typography variant="h4">{t('index.headline')}</Typography>
      </div>
      <Montage />
    </div>
  );
}
