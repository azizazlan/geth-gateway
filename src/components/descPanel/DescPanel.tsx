import { Typography } from '@mui/material';
import React from 'react';

import styles from './styles';

export default function DescPanel() {
  return (
    <div style={styles.textborder}>
      <Typography variant="h5">
        While walking across an open, grassy field, I became excited as my hand
        swooped toward the ground like an eagle attacking its prey. I picked up
        half of a $5 bill. I continued to walk around looking for the other half
        but thought to myself it would be impossible to find it on such a windy
        day. As I lifted my head, I spotted the other half of the bill tangled
        in crabgrass. Somehow, finding two halves of a ripped $5 bill felt
        better than working for a twenty. —Submitted by Ron Fleming, Fort Drum,
        New York.
      </Typography>
    </div>
  );
}
