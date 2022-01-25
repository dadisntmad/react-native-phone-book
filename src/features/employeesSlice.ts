import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employees, EmployeesSliceState } from '../types/employeesSlice';

const initialState: EmployeesSliceState = {
  searchValue: '',
  employees: [],
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
  },
});

export const { setSearchValue, setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
