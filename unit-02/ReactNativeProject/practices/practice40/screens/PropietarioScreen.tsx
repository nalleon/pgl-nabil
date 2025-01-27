import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PropietarioRepository } from '../data/Database';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

type Props = {}

type Propietario = {
    name: string;
}

const PropietarioScreen = (props: Props) => {
        const [nombre, setNombre] = useState<string>("");

        const save = async () => {
            if(nombre.trim() === ""){
                return;
            }
            
            const propietario : Propietario = {
                name: nombre,
            }
            
            await PropietarioRepository.save(propietario);
            setNombre("");
        }

    return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Nombre</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre del propietario"
                            onChangeText={(text) => setNombre(text)}
                        />
                    </View>
                </View>

                <Button title='Crear propietario' color={'#008080'} onPress={save}/>
            </ScrollView>
    )
}

export default PropietarioScreen


const styles = StyleSheet.create({
    mainContainer:{
        margin: 5
    },
    inputContainer: {
        marginBottom: 10, 
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        color: '#008080'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        marginHorizontal: 15
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    switchLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#008080'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#008080',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    rowText: {
        flex: 1,
        textAlign: 'center',
    },
})