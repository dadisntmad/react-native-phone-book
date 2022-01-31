import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSliceState } from '../types/authSlice';

const initialState: AuthSliceState = {
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = authSlice.actions;

export default authSlice.reducer;
