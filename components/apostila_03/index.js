import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function apostila03() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>
      <TouchableOpacity
       style={styles.button}
        onPress={alert('salve')}
         >
        <Text style={styles.textButton}> Olá Mundo!!! </Text>
      </TouchableOpacity>
    </View>
  );
}
