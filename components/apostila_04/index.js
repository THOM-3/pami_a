import React, { useState } from 'react'; 
import { View, Text, TextInput,TouchableOpacity } from 'react-native'; 

import styles from './styles';


function Apostila04() {
    const [entrada2, setEntrada2] = useState('')
    const [entrada, setEntrada] = useState('')
    const [mensagem, setMensagem] = useState('Insira Nome e Sobrenome');

    function apresentaMensagem(){
        setMensagem(entrada + ' ' + entrada2);
        setEntrada('');
        setEntrada2('');
    }


    return(
        <View style={styles.container}>
            <Text>Exemplo 4</Text>
            <Text 
             style={styles.txtSaida}
             
            >
                
                {mensagem}
                </Text>

                <Text style={styles.txtEsq}> Nome </Text>
            
            <TextInput 
                style={styles.txtEntrada}
                onChangeText={(e) => setEntrada(e)}
                value={entrada}
                
            />
            
            <Text style={styles.txtEsq}> Sobrenome </Text>

            <TextInput 
                style={styles.txtEntrada}
                onChangeText={(i) => setEntrada2(i)}
                value={entrada2}
            />
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> apresentaMensagem()}
                >
                    
                    <Text style={styles.textButton}>Exibir texto </Text>
                </TouchableOpacity>

        </View>
    );
}



export default Apostila04;