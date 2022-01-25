import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectPassword } from '../selectors/selectors';
import { setEmail, setPassword } from '../features/authSlice';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from '../../firebase';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import { setDoc, doc } from 'firebase/firestore';

import signin from '../../assets/images/signin.png';
import signup from '../../assets/images/signup.png';

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const [formType, setFormType] = useState<'signin' | 'signup'>('signin');

  const handleSignUpNavigation = () => {
    setFormType('signup');
  };

  const handleSignInNavigation = () => {
    setFormType('signin');
  };

  const onSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const data = {
          id: userCredential.user.uid,
          email: email,
        };
        await setDoc(doc(db, 'companies', userCredential.user.uid), data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      {formType === 'signin' ? (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Image style={styles.image} source={signin} />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => dispatch(setEmail(text))}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => dispatch(setPassword(text))}
          />
          <TouchableOpacity style={styles.button} onPress={onSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUpNavigation}>
            <Text style={styles.navigationText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Image style={styles.image} source={signup} />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => dispatch(setEmail(text))}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => dispatch(setPassword(text))}
          />
          <TouchableOpacity style={styles.button} onPress={onSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignInNavigation}>
            <Text style={styles.navigationText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textInput: {
    marginBottom: 18,
    width: 290,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    padding: 12,
  },
  button: {
    width: 290,
    height: 40,
    backgroundColor: '#2A44FF',
    borderRadius: 10,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  navigationText: {
    color: '#1A73E8',
  },
});
