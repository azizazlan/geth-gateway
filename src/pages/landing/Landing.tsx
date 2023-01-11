import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import styles from './styles';
import montage from '../../assets/montage.svg';

export default function Landing() {
  const { t } = useTranslation();
  const { user } = useUserSelector((state: UserState) => state.user);

  if (user) {
    return <Navigate to="/projects" />;
  }

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.leftColumn}>
          <Typography style={styles.topHeadlineText}>
            Reduce your setup time and cost.
          </Typography>
          <Typography
            style={{ fontWeight: 600, fontSize: '57pt', lineHeight: 1.1 }}
          >
            {t('index.headline')}
          </Typography>
          <Typography style={styles.subHeadlineText}>
            National blockchain infrastructure by the Malaysian Administrative
            Modernisation and Management Planning Unit.
          </Typography>
        </div>
        <div style={styles.rightColumn}>
          <img src={montage} alt="montage" />
        </div>
      </div>
      <div style={styles.howToStartDiv}>
        <div style={styles.leftColumn}>
          <Typography>How to start</Typography>
          <Typography variant="h3" style={{ maxWidth: '355px' }}>
            Intuitive and let you focus on your solution
          </Typography>
        </div>
        <div style={styles.rightColumn}>
          TODO: THIS IS A CONCEPT
          <Typography>Create a bunga raya account</Typography>
          <Typography>Create and submit a project</Typography>
          <Typography>Get the API Key and connect!</Typography>
        </div>
      </div>
      <div style={styles.orgDiv}>
        <div style={styles.leftColumn}>
          <Typography>Organizations</Typography>
          <Typography variant="h3" style={{ maxWidth: '355px' }}>
            We have supported few organizations
          </Typography>
        </div>
        <div style={styles.rightColumn}>
          TODO: Beautify and perhaps org logos instead?!
          <Typography>Ministry of Human Resources</Typography>
          <Typography>Marine Department Malaysia</Typography>
          <Typography>...and few more!</Typography>
        </div>
      </div>
    </div>
  );
}
