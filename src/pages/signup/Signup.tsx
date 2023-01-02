import { Button } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../services/reducers/hook';
import { signup } from '../../services/reducers/signingup';
import { AppState } from '../../services/store';

export default function Signup() {
  const dispatch = useAppDispatch();
  const handleSignUp = () => {
    console.log('Signed Up');
    dispatch(signup);
  };
  return (
    <div>
      <Button onClick={handleSignUp}>Signup</Button>
    </div>
  );
}
