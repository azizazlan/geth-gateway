/* eslint-disable no-console */
import { useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Navigate } from 'react-router-dom';
import getProjects from '../../services/thunks/admin/getProjects';
import styles from './styles';
import { useAdminDispatch, useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Project name', width: 170 },
  { field: 'description', headerName: 'Description', width: 500 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'apiKey', headerName: 'API Key', width: 130 },
  { field: 'createdAt', headerName: 'Created at', width: 130 },
];

export default function Projects() {
  const windowDimension = getWindowDimensions();
  console.log(windowDimension);
  const dispatch = useAdminDispatch();
  const { projects, user, submissionState } = useAdminSelector(
    (state: AdminState) => state.admin
  );

  useEffect(() => {
    if (projects || !user) {
      return;
    }

    const { id } = user;
    dispatch(
      getProjects({
        userId: id, // admin user id
      })
    );
  }, [projects, user]);

  if (!user) {
    return <Navigate to="/admin" />;
  }

  if (!projects || submissionState === 'PENDING') {
    return <div style={styles.loadingContainer}>Loading...</div>;
  }

  return (
    <div style={{ height: `${windowDimension.height-120}px`, width: '100%' }}>
      <DataGrid
        rows={projects}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
