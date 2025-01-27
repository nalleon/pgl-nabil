import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Propietario } from '../data/entities/Propietario';
import { Casa } from '../data/entities/Casa';
import { CasaRepository, PropietarioRepository } from '../data/Database';
import { FlatList, TextInput } from 'react-native-gesture-handler';

type Props = {}

type PropietarioType = {
  id: number,
  name: string,
  casas: Casa[]
}

type CasaType = {
  refCastatal: string,
  metros: number,
  propietarios: Propietario[]
}
const PropietarioCasaScreen = (props: Props) => {
      const [propietarios, setPropietarios] = useState<PropietarioType[]>({} as PropietarioType[]);
      const [casas, setCasas] = useState<CasaType[]>({} as CasaType[]);

      const [propietarioName, setPropietarioName] = useState<string>("");
      const [refCastatal, setRefCastatal] = useState<string>("");
  
  
      useEffect(() => {
          const getPropietarios = async () => {
              const propietarioList = await PropietarioRepository.find();
              setPropietarios([...propietarioList]);
          }
          getPropietarios();  
      }, [propietarios])

      useEffect(() => {
        const getCasas = async () => {
            const casasList = await CasaRepository.find();
            setCasas([...casasList]);
        }
        getCasas();  
      }, [casas])

      const handleCreateRelation = async () => {
        const propietario = await PropietarioRepository.findOne({where: {name: propietarioName}});
        const casa = await CasaRepository.findOne({where: {refCastatal: refCastatal}});
        
        if(propietario && casa){
          
          propietario.casas = [...(propietario.casas || []), casa];
          await PropietarioRepository.save(propietario);
  
          casa.propietarios = [...(casa.propietarios || []), propietario];
          await CasaRepository.save(casa);

        } 


        setPropietarioName("");
        setRefCastatal("");
      }

  
  
  return (
          <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Ref Castatal</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre del propietario"
                        onChangeText={(text) => setPropietarioName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Metros</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Referencia Castatal"
                        onChangeText={(text) => setRefCastatal(text)}
                    />
                </View>
            </View>
            <FlatList
                data={propietarios}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Propietario</Text>
                    </View>
                }
                />
            <FlatList
                data={casas}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.refCastatal}</Text>
                    <Text style={styles.rowText}>{item.metros}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.refCastatal+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Ref Castatal</Text>
                        <Text style={styles.headerText}>Metros</Text>
                    </View>
                }
                />
          <Button title='Crear relacion' color={'#008080'} onPress={handleCreateRelation}/>
        </View>
  )
}

export default PropietarioCasaScreen

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