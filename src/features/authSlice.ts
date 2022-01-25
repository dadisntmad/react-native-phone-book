import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSliceState } from '../types/authSlice';

const initialState: AuthSliceState = {
  companyName: '',
  address: '',
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setCompanyName, setAddress, setEmail, setPassword } = authSlice.actions;

export default authSlice.reducer;
