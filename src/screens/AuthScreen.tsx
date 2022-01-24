import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import signin from '../../assets/images/signin.png';
import signup from '../../assets/images/signup.png';

export const AuthScreen = () => {
  const [formType, setFormType] = useState<'signin' | 'signup'>('signin');

  const handleSignUpNavigation = () => {
    setFormType('signup');
  };

  const handleSignInNavigation = () => {
    setFormType('signin');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      {formType === 'signin' ? (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Image style={styles.image} source={signin} />
          <TextInput style={styles.textInput} placeholder="Email" keyboardType="email-address" />
          <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
          <TouchableOpacity style={styles.button}>
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
          <TextInput style={styles.textInput} placeholder="Company name" />
          <TextInput style={styles.textInput} placeholder="Email" keyboardType="email-address" />
          <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
          <TouchableOpacity style={styles.button}>
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
  },
  contentContainer: {
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 30,
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
