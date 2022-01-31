export type EmployeesSliceState = {
  searchValue: string;
  employees: Employees[];
  fullName: string;
  phoneNumber: string;
  email: string;
  position: string;
  editMode: boolean;
  selectedEmployee: string;
};

export type Employees = {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  position: string;
};
