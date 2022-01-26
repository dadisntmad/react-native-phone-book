import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employees, EmployeesSliceState } from '../types/employeesSlice';

const initialState: EmployeesSliceState = {
  searchValue: '',
  employees: [],
  fullName: '',
  phoneNumber: '',
  email: '',
  position: '',
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setEmployees: (state, action: PayloadAction<Employees[]>) => {
      state.employees = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },
  },
});

export const { setSearchValue, setEmployees, setFullName, setPhoneNumber, setEmail, setPosition } =
  employeesSlice.actions;

export default employeesSlice.reducer;
