/* eslint-disable no-console */
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useAdminDispatch, useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import { getProject } from '../../services/reducers/admin/reducer';

export default function Page() {
  const params = useParams();

  const { projectId } = params;
  const { projects } = useAdminSelector((state: AdminState) => state.admin);
  const project = projects?.filter((p) => p.id.toString() === projectId)[0];

  if (!project) {
    return <div>oops sorry!</div>;
  }

  const { name, description, status, createdAt } = project;

  return (
    <Box>
      Farabi to do react-hook-form that allow user to click APPROVE button!
      <br />
      {name},
      <br />
      {description},
      <br />
      <Button variant="contained" type="submit">
        approve
      </Button>
    </Box>
  );
}
