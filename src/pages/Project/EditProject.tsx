/* eslint-disable no-console */
import { Button, FormControl, TextField } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import styles from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Please key in name'),
  description: Yup.string().required('Please key in description'),
});

type EditProjectFields = {
  name: string;
  description: string;
};

export default function EditProject() {
  const params = useParams();
  const { projectId } = params;

  const { projects } = useUserSelector((state: UserState) => state.user);

  if (!projects) {
    return <div style={styles.container}>Error</div>;
  }

  const project = projects.filter(
    (p) => p.id === parseInt(`${projectId}`, 10)
  )[0];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProjectFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: project.name,
      description: project.description
    }
  });

  const onSubmit: SubmitHandler<EditProjectFields> = (data) => {
    console.log(data);
  };

  return (
    <div style={styles.container}>
      <form
        style={styles.formContainer}
        id="editProject"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl fullWidth margin="normal">
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => <TextField label="Name" {...field} />}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Controller
            name="description"
            defaultValue=""
            control={control}
            render={({ field }) => <TextField label="Description" {...field} />}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            value={`${project.apiKey ? project.apiKey : 'PENDING'}`}
            label="API Key"
            InputProps={{
              readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </form>
      <Link to={`/projects/${projectId}`}>Close</Link>
      <Button type="submit" form="editProject">
        Update
      </Button>
    </div>
  );
}
