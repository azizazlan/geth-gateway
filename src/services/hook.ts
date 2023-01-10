import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  AppState,
  AppDispatch,
  AdminDispatch,
  UserDispatch,
  UserState,
  EthereumDispatch,
  EthereumState,
} from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useUserDispatch = () => useDispatch<UserDispatch>();
export const useUserSelector: TypedUseSelectorHook<UserState> = useSelector;

export const useAdminDispatch = () => useDispatch<AdminDispatch>();
export const useAdminSelector: TypedUseSelectorHook<UserState> = useSelector;

export const useEthereumDispatch = () => useDispatch<EthereumDispatch>();
export const useEthereumSelector: TypedUseSelectorHook<EthereumState> =
  useSelector;
