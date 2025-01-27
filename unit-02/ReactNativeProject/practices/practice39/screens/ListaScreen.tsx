import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Casa } from '../data/entities/Casa';
import { PropietarioRepository } from '../data/Database';
import { FlatList } from 'react-native-gesture-handler';
import { Propietario } from '../data/entities/Propietario';

type Props = {}

type PropietarioType = {
  id: number;
  name: string;
  casas: Casa[];
}

const ListaScreen = (props: Props) => {
    const [propietarios, setPropietarios] = useState<PropietarioType[]>({} as PropietarioType[]);  

    useEffect(() => {
        const getList = async () => {
            const propietarioList = await PropietarioRepository.find(
                {relations: {casas:true}}
            );
            setPropietarios([...propietarioList]);
        }

        getList();

    }, [propietarios])
    
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={propietarios}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                    <Text style={styles.rowText}>{JSON.stringify(item.casas.map(casa => casa.refCastatal))}</Text>
                    <Text style={styles.rowText}>{JSON.stringify(item.casas.map(casa => casa.metros))}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Propietario</Text>
                        <Text style={styles.headerText}>RefCastatal</Text>
                        <Text style={styles.headerText}>Metros</Text>
                    </View>
                }
                />
        </View>
    )
}

export default ListaScreen

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