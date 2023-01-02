import { StoreTwoTone } from '@mui/icons-material';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import appReducer from './reducers/signingup';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
