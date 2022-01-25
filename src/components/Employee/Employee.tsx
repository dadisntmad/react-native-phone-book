import { View, Text } from 'react-native';
import React from 'react';
import { Employees } from '../../types/employeesSlice';

import styles from './styles';

type EmployeeProps = {
  employee: Employees;
};

export const Employee = ({ employee }: EmployeeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{employee.fullName}</Text>
    </View>
  );
};
