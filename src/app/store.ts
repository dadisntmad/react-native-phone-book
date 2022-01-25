import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import employeesSlice from '../features/employeesSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    employees: employeesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
