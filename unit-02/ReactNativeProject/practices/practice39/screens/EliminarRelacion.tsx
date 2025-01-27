import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { CasaRepository, PropietarioRepository } from '../data/Database';
import { Casa } from '../data/entities/Casa';
import { Propietario } from '../data/entities/Propietario';

type Props = {}

type PropietarioType = {
    id: number,
    name: string,
    casas: Casa[]
}


const EliminarRelacion = (props: Props) => {
    const [propietarios, setPropietarios] = useState<PropietarioType[]>([]);

    const [propietarioName, setPropietarioName] = useState<string>("");
    const [refCastatal, setRefCastatal] = useState<string>("");
    
    
    useEffect(() => {
        const getPropietarios = async () => {
            const propietarioList = await PropietarioRepository.find(
                {
                    relations: {casas:true}
                }
            );
            setPropietarios([...propietarioList]);
        }
        getPropietarios();  
    }, [propietarios])

    const handleDeleteRelation = async () => {
        const propietario = await PropietarioRepository.findOne({where: {name: propietarioName}});
        const casa = await CasaRepository.findOne({where: {refCastatal: refCastatal}});
        
        if(propietario && casa){
            propietario.casas = [];
            await PropietarioRepository.save(propietario);

            casa.propietarios = [];
            await CasaRepository.save(casa);
        } 


        setPropietarioName("");
        setRefCastatal("");
    }



    return (
        <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Nombre propietaio</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre del propietario"
                        onChangeText={(text) => setPropietarioName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Ref Castatal</Text>
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
                        {item.casas.length >  0 &&
                            <>
                                <Text style={styles.rowText}>{item.name}</Text>
                                <Text style={styles.rowText}>{JSON.stringify(item.casas.map(casa => casa.refCastatal))}</Text>
                            </>
                        }
                    </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Propietario</Text>
                        <Text style={styles.headerText}>RefCastatal</Text>
                    </View>
                }
                />
            <Button title='Eliminar relacion' color={'#008080'} onPress={handleDeleteRelation}/>
        </View>
    )
}

export default EliminarRelacion

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