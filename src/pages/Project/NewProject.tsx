/* eslint-disable no-console */
import { Alert, Button, FormControl, TextField } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useUserDispatch, useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import styles from './styles';
import createProject from '../../services/thunks/user/createProject';

const schema = Yup.object().shape({
  name: Yup.string().required('Please key in name'),
  description: Yup.string().required('Please key in description'),
});

type EditProjectFields = {
  name: string;
  description: string;
};

export default function NewProject() {
  const userDispatch = useUserDispatch();
  const { user, submissionState } = useUserSelector(
    (state: UserState) => state.user
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProjectFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<EditProjectFields> = (data) => {
    console.log(data);

    if (!user) {
      return;
    }

    const userId = user.id;
    const orgId = user.org.id;

    const { name, description } = data;
    userDispatch(
      createProject({
        userId,
        orgId,
        name,
        description,
      })
    );
  };

  return (
    <div style={styles.container}>
      <form
        style={styles.formContainer}
        id="newProject"
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
      </form>
      <div style={styles.bottomDiv}>
        <div style={styles.leftButtons}>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/projects"
          >
            cancel
          </Button>
        </div>
        <div style={styles.rightButtons}>
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            form="newProject"
          >
            create
          </Button>
        </div>
      </div>
    </div>
  );
}
