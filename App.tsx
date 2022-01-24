import { StyleSheet, SafeAreaView } from 'react-native';
import { AuthScreen } from './src/screens/AuthScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <AuthScreen />
      </SafeAreaProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
