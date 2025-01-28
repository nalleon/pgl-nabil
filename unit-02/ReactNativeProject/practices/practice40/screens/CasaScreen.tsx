import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { CasaRepository } from '../data/Database';
import { Casa } from '../data/entities/Casa';

type Props = {}

const CasaScreen = (props: Props) => {
    const [refCastatal, setRefCastatal] = useState<string>("");
    const [metros, setMetros] = useState<number>(0);

        const save = async () => {
            if(refCastatal.trim() === "" || metros <= 0){
                return;
            }
            
            const casa = new Casa ();
            casa.refCastatal = refCastatal;
            casa.metros = metros;


            const casa2 = new Casa ();
            casa.refCastatal = refCastatal+2;
            casa.metros = metros+1;
            
            
            let casas = [];
            casas.push(casa);
            casas.push(casa2);

            await CasaRepository.saveAtOnce(casas);
            setRefCastatal("");
            setMetros(0);
        }

    return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Ref Castatal</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Referencia castatal"
                            onChangeText={(text) => setRefCastatal(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Metros</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Metros cuadrado"
                            onChangeText={(text) => setMetros(parseFloat(text))}
                        />
                    </View>
                </View>

                <Button title='Crear casa' color={'#008080'} onPress={save}/>
            </ScrollView>
    )
}

export default CasaScreen

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