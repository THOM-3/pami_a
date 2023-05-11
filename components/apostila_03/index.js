import react, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function apostila03() {

const [contador, setContador] = useState(0);

function addNumber() {
  setContador(contador + 1);
}

function addNumber() {
  setContador(contador - 1);
}
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>

      <Text style={styles.textCounter}>{contador}</Text>

      <TouchableOpacity
       style={styles.button}
        onPress={() => addNumber()}
         >
        <Text style={styles.textButton} >+</Text>
        <Text style={styles.textButton} >-</Text>
      </TouchableOpacity>
    </View>
  );
}
