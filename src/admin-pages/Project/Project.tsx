/* eslint-disable no-console */
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import styles from './styles';

type ProjectFields = {
  name: string;
  description: string;
  status: string;
  createdAt: string;
};

export default function Page() {
  const params = useParams();

  const { projectId } = params;
  const { projects } = useAdminSelector((state: AdminState) => state.admin);
  const project = projects?.filter((p) => p.id.toString() === projectId)[0];

  if (!project) {
    return <div>oops sorry!</div>;
  }

  const { name, description, status, createdAt } = project;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFields>({
    defaultValues: {
      name,
      description,
      status,
      createdAt,
    },
  });

  const onSubmit: SubmitHandler<ProjectFields> = (data) => {
    const { name, description } = data;
    // TODO dispatch to update - approve the project
    console.log(data);
    // dispatch(approveProject({
    //  projectId
    // }))

    // Create approveProject.ts thunk in services/thunk/admin
  };

  return (
    <Box>
      <form
        style={styles.formContainer}
        id="formApprove"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="email">Name</InputLabel>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput readOnly label="Name" id="name" {...field} />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="description">Description</InputLabel>
          <Controller
            name="description"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                readOnly
                multiline
                label="Description"
                id="description"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="status">Status</InputLabel>
          <Controller
            name="status"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput readOnly label="Status" id="status" {...field} />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="createdAt">Created at</InputLabel>
          <Controller
            name="createdAt"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                readOnly
                label="CreatedAt"
                id="createdAt"
                {...field}
              />
            )}
          />
        </FormControl>
      </form>
      <Box sx={styles.buttons}>
        <Button variant="contained" type="submit" form="formApprove">
          approve
        </Button>
      </Box>
    </Box>
  );
}
