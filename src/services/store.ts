import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import appReducer from './reducers/app/reducer';
import userReducer from './reducers/user/reducer';
import adminReducer from './reducers/admin/reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    admin: adminReducer,
    user: userReducer,
  },
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserState = ReturnType<typeof store.getState>;
export type UserDispatch = typeof store.dispatch;

export type AdminState = ReturnType<typeof store.getState>;
export type AdminDispatch = typeof store.dispatch;
