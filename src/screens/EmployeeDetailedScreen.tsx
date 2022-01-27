import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeDetailed'>;

export const EmployeeDetailedScreen = ({ route }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{route.params.fullName.slice(0, 1)}</Text>
      </View>
      <Text style={styles.name}>{route.params.fullName}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Fullname</Text>
        <Text style={styles.infoSubtitle}>{route.params.fullName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Phone number</Text>
        <Text style={styles.infoNumber}>{route.params.phoneNumber}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email</Text>
        <Text style={styles.infoEmail}>{route.params.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Position</Text>
        <Text style={styles.infoSubtitle}>{route.params.position}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 72,
    color: 'white',
    fontWeight: '600',
  },
  name: {
    fontSize: 36,
    marginBottom: 18,
  },
  infoContainer: {
    width: 330,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#ECECEC',
    marginBottom: 24,
  },
  infoTitle: {
    padding: 14,
  },
  infoSubtitle: {
    fontSize: 16,
    paddingHorizontal: 14,
    color: '#6B6B6B',
  },
  infoNumber: {
    fontSize: 16,
    paddingHorizontal: 14,
    color: '#1A73E8',
  },
  infoEmail: {
    fontSize: 16,
    paddingHorizontal: 14,
    color: '#1A73E8',
  },
});
