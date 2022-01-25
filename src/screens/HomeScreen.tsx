import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { RootStackParamList } from '../types/navigation';

import { Icon } from 'react-native-elements';
import { Employees } from '../components/Employees/Employees';

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSignOut = () =>
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          signOut(auth)
            .then(() => {
              navigation.replace('Auth');
            })
            .catch((e) => {
              console.log(e);
            }),
      },
    ]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{auth.currentUser?.email}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon
              type="antdesign"
              name="plus"
              color="#1A73E8"
              size={30}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signOutButton} onPress={onSignOut}>
            <Icon
              type="antdesign"
              name="arrowright"
              color="#1A73E8"
              size={30}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar />
      <Employees />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  signOutButton: {
    marginLeft: 10,
  },
});
