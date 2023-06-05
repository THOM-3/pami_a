import React, { useState } from 'react'; 
import { View, Text, TextInput,TouchableOpacity } from 'react-native'; 

import styles from './styles';


function Apostila04() {

    const [entrada, setEntrada] = useState('')
    const [mensagem, setMensagem] = useState('Me Chama de GEBA');

    function apresentaMensagem(){

        setMensagem(entrada);
        setEntrada('');

    function apresentaNome(){
        setMensagem(entrada);
        setEntrada('');
    }    
    
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
                onChangeText={(e) => setEntrada(e)}
                value={entrada}
            />
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> apresentaMensagem()}
                >
                    
                    <Text style={styles.Button}>Exibir texto </Text>
                </TouchableOpacity>

        </View>
    );
}



export default Apostila04;