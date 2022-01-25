import { RootState } from '../app/store';

// Auth Slice
export const selectCompanyName = ({ auth }: RootState) => auth.companyName;
export const selectAddress = ({ auth }: RootState) => auth.address;
export const selectEmail = ({ auth }: RootState) => auth.email;
export const selectPassword = ({ auth }: RootState) => auth.password;
