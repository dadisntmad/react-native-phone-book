import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Employee } from '../Employee/Employee';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployees, selectSearchValue } from '../../selectors/selectors';
import { query, collection, where, onSnapshot, orderBy } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { setEmployees } from '../../features/employeesSlice';

export const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);
  const searchValue = useSelector(selectSearchValue);
  const currentUser = auth.currentUser?.uid;

  const filteredEmployees = employees.filter((employees) =>
    employees.fullName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    const q = query(
      collection(db, 'employees'),
      where('compID', '==', currentUser),
      orderBy('fullName', 'asc'),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      dispatch(
        setEmployees(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            fullName: doc.data().fullName,
            phoneNumber: doc.data().phoneNumber,
            email: doc.data().email,
            position: doc.data().position,
          })),
        ),
      );
    });

    return unsubscribe;
  }, []);

  return (
    <FlatList
      data={filteredEmployees}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Employee employee={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};
