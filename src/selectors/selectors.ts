import { RootState } from '../app/store';

// Auth Slice
export const selectCompanyName = ({ auth }: RootState) => auth.companyName;
export const selectAddress = ({ auth }: RootState) => auth.address;
export const selectEmail = ({ auth }: RootState) => auth.email;
export const selectPassword = ({ auth }: RootState) => auth.password;

// Employees Slice
export const selectSearchValue = ({ employees }: RootState) => employees.searchValue;
export const selectEmployees = ({ employees }: RootState) => employees.employees;
export const selectFullName = ({ employees }: RootState) => employees.fullName;
export const selectPhoneNumber = ({ employees }: RootState) => employees.phoneNumber;
export const selectEmployeeEmail = ({ employees }: RootState) => employees.email;
export const selectPosition = ({ employees }: RootState) => employees.position;
