import { StyleSheet, SafeAreaView } from 'react-native';
import { AuthScreen } from './src/screens/AuthScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ModalScreen } from './src/screens/ModalScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/app/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                  name="Modal"
                  component={ModalScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
