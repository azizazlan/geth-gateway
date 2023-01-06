/* eslint-disable no-console */
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { Navigate } from 'react-router-dom';
import styles from './styles';
import Loader from '../../components/Loader/Loader';
import { useAdminDispatch, useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';
import signIn from '../../services/thunks/admin/signIn';

type SignInFields = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().required('Please key in email'),
  password: Yup.string().required('Please key in password'),
});

export default function Signin() {
  const adminDispatch = useAdminDispatch();
  const { submissionState, isSignedIn } = useAdminSelector(
    (state: AdminState) => state.admin
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInFields> = (data) => {
    const { email, password } = data;
    adminDispatch(
      signIn({
        email,
        password,
      })
    );
  };

  if (isSignedIn) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div style={styles.container}>
      <Loader
        open={submissionState === 'PENDING'}
        handleClose={() => console.log('close')}
      />
      <Typography variant="h4">Admin login</Typography>
      <form
        style={styles.formContainer}
        id="signin"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput label="Email" id="email" {...field} />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput label="Password" id="password" {...field} />
            )}
          />
        </FormControl>
        {/* {submissionErrMsg ? (
          <FormHelperText error>{submissionErrMsg}</FormHelperText>
        ) : null} */}
      </form>
      <Button color="secondary" type="submit" form="signin" variant="contained">
        admin sign in
      </Button>
    </div>
  );
}
