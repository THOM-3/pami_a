    import react, { useState } from 'react';
    import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
    import styles from './styles';


    export default function Index()  {
        const [n1, setN1] = useState(0);
        const [n2, setN2] = useState(0);
        const [total, setTotal] = useState(0);
    
        function Soma() {
            const conta = parseInt(n1) + parseInt(n2);
            setTotal(conta.toString());
            
        }
        return(
            
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Exemplo 05
                </Text>

            <Text style={styles.txtSaida}>  Calculadora Básica </Text>
            <Text style={styles.textLabel}>  1º Número </Text>
            <TextInput onChangeText={(entrada) => setN1(entrada)} 
            value={n1}
            style={styles.txtEntrada}
                            />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}>  2º Número </Text>
            <TextInput onChangeText={(entrada) => setN2(entrada)}
                        value={n2}
                        style={styles.txtEntrada}
                        /> 
            <Text style={styles.txtSaida}> = </Text> 

            <Text style={[styles.txtSaida, {margin: 0}]}> </Text>      

            <Text style={styles.textLabel}>  Total </Text>
            <TextInput style={styles.txtEntrada}
                        editable={false}
                        value={total}
                        />

            <TouchableOpacity style={ styles.button} onPress={() => Soma()}>
            <Text style={styles.textButton}> + </Text>

            </TouchableOpacity>
            </View>

        );

    }
