export type EmployeesSliceState = {
  searchValue: string;
  employees: Employees[];
};

export type Employees = {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  position: string;
};
