import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function Botao({sinal, funcao }) {
    retur(
        <TouchableOpacity
        style={[styles.button, styles.botaoSinal]}
         onPress={() => addNumber()}
          >
         <Text style={styles.textButton} >{sinal}</Text>
       </TouchableOpacity>
    );

}

export default Botao;