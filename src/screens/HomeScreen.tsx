import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { RootStackParamList } from '../types/navigation';

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
    <View>
      <TouchableOpacity onPress={onSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
