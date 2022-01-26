import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectEmployeeEmail,
  selectFullName,
  selectPhoneNumber,
  selectPosition,
} from '../selectors/selectors';
import { setEmail, setFullName, setPhoneNumber, setPosition } from '../features/employeesSlice';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';

import add from '../../assets/images/add.png';

import { Icon } from 'react-native-elements';

export const ModalScreen = () => {
  const dispatch = useDispatch();
  const fullName = useSelector(selectFullName);
  const phoneNumber = useSelector(selectPhoneNumber);
  const email = useSelector(selectEmployeeEmail);
  const position = useSelector(selectPosition);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const currentUser = auth.currentUser?.uid;

  const onNavigateBack = () => {
    navigation.goBack();
  };

  const onCloseModal = async () => {
    try {
      await addDoc(collection(db, 'employees'), {
        compID: currentUser,
        fullName,
        phoneNumber,
        email,
        position,
      });
    } catch (error) {
      console.log(error);
    }
    onNavigateBack();
    dispatch(setFullName(''));
    dispatch(setPhoneNumber(''));
    dispatch(setEmail(''));
    dispatch(setPosition(''));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={onNavigateBack}>
        <Icon
          type="materialicons"
          name="cancel"
          color="#cdcdcd"
          size={40}
          tvParallaxProperties={undefined}
        />
      </TouchableOpacity>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={75}>
        <Image style={styles.image} source={add} />
        <Text style={styles.title}>Add an employee</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Full name"
            value={fullName}
            onChangeText={(text) => dispatch(setFullName(text))}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone number"
            value={phoneNumber}
            onChangeText={(text) => dispatch(setPhoneNumber(text))}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={(text) => dispatch(setEmail(text))}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Position"
            value={position}
            onChangeText={(text) => dispatch(setPosition(text))}
          />
          <TouchableOpacity style={styles.addButton} onPress={onCloseModal}>
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 14,
  },
  buttonBack: {
    alignSelf: 'flex-end',
    zIndex: 9,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: 34,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 325,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    marginBottom: 24,
    padding: 10,
  },
  addButton: {
    width: 325,
    height: 50,
    backgroundColor: '#2A44FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    color: 'white',
  },
});
