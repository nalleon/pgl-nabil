import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PersonaRepository, dataSource } from '../data/Database'
import { Persona } from '../data/entities/Persona'

type Props = {}

const Practice32Screen = (props: Props) => {

    useEffect(() => {
        async function initDB() {
            await dataSource.initialize();
        }
        initDB();
    }, []);

    const [personas, setPersonas] = useState<Persona[]>([]);
    const [currentName, setCurrentName] = useState("");
    const [currentAge, setCurrentAge] = useState(0);

    async function save() {
        if (!currentName ||!currentAge){
            return;
        }

        const newPerson = {
            nombre: currentName,
            edad: currentAge
        }

        await PersonaRepository.save(newPerson);
        const newPersonas = await PersonaRepository.find();
        setPersonas([...newPersonas]);
    }

return (
    <View style={{flex: 1}}>
        <TextInput placeholder='name' onChangeText={(text) => setCurrentName(text)}/>
        <TextInput placeholder='age' onChangeText={(text) => setCurrentAge(parseInt(text))}/>
        <FlatList
            data={personas}
            renderItem={({item}) => (
                <Text style={styles.text}>{item.id}; {item.nombre}; {item.edad}</Text>
            )}
            keyExtractor={(item, index) => item.id + "" + index}
        />
        <Button title='Create person' onPress={save}/>
    </View>
    )
}

export default Practice32Screen

const styles = StyleSheet.create({
    text:{
        color: '#008080'
    }
})