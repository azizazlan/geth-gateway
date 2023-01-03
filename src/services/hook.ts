import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserDispatch, UserState } from './store';
import type { AppState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useUserDispatch = () => useDispatch<UserDispatch>();
export const useUserSelector: TypedUseSelectorHook<UserState> = useSelector;