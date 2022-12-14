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
} from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useUserDispatch, useUserSelector } from '../../services/hook';
import signIn from '../../services/thunks/user/signIn';
import styles from './styles';
import { UserState } from '../../services/store';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';

type SignInFields = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().required('Please key in email'),
  password: Yup.string().required('Please key in password'),
});

export default function Signin() {
  const { isSignedIn, submissionState, submissionErrMsg } = useUserSelector(
    (state: UserState) => state.user
  );
  const userDispatch = useUserDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInFields> = (data) => {
    const { email, password } = data;

    userDispatch(
      signIn({
        email,
        password,
      })
    );
  };

  if (isSignedIn) {
    return <Navigate to="/projects" />;
  }

  return (
    <div style={styles.container}>
      <ProgressIndicator
        open={submissionState === 'PENDING'}
        handleClose={() => console.log('close')}
      />
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
        {submissionErrMsg ? (
          <FormHelperText error>{submissionErrMsg}</FormHelperText>
        ) : null}
      </form>
      <Button color="secondary" type="submit" form="signin" variant="contained">
        sign in
      </Button>
    </div>
  );
}
