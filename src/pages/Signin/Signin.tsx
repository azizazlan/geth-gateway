import { Button } from '@mui/material';
import { useUserDispatch } from '../../services/hook';
import signIn from '../../services/hooks/user/signIn';

export default function Signin() {
  const userDispatch = useUserDispatch();

  const handleSignin = () => {
    const email = 'jebon@gmail.com';
    const password = 'Jebon123#';

    userDispatch(
      signIn({
        email,
        password,
      })
    );
  };

  return (
    <div>
      <Button onClick={handleSignin}>Signin</Button>
    </div>
  );
}
