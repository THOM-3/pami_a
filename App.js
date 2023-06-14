import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Apostila03 from './components/apostila_03';
import Apostila3A from './components/apostila_03_avancado';
import Apostila04 from './components/apostila_04';
import Apostila05 from './components/apostila_05';

// import Index from './components/Index';

export default function App() {
  return (
      <View style={styles.container}>
      <Apostila05 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
