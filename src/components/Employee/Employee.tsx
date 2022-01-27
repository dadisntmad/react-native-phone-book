import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Employees } from '../../types/employeesSlice';

import { Swipeable, TouchableOpacity as OuterTouchable } from 'react-native-gesture-handler';

import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

import { Icon } from 'react-native-elements';

import styles from './styles';

type EmployeeProps = {
  employee: Employees;
};

export const Employee = ({ employee }: EmployeeProps) => {
  const rightSwipe = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    let scale = dragX.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const onDelete = async () => {
      await deleteDoc(doc(db, 'employees', employee.id));
    };

    return (
      <OuterTouchable activeOpacity={0.6} onPress={onDelete}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            <Icon
              style={{ justifyContent: 'center', alignItems: 'center' }}
              name="delete"
              type="materialicons"
              size={40}
              color="white"
              tvParallaxProperties={undefined}
            />
          </Animated.Text>
        </View>
      </OuterTouchable>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View style={styles.container}>
        <Text style={styles.text}>{employee.fullName}</Text>
      </View>
    </Swipeable>
  );
};
