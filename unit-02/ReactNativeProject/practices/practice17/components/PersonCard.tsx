import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {
    person : Person;
    modifyPerson : (person: Person) => void;
}

type Person = {
    id: number,
    name: string,
    heigth: number,
    weight: number,
}

const PersonCard = (props: Props) => {
    const { person } = props;

    const [imc, setimc] = useState(0)
    const [formData, setFormData] = useState<Person>({} as Person);


    useEffect(() => {
        
    }, [person])

    function calculateIMC(){
        if(formData.weight && formData.heigth){
            setimc(formData.weight / ((formData.heigth)**2)*1000);
        }
    }

    function fillFormData (value : number|string, field: keyof Person){
        setFormData(
            {   
                ...formData, 
                [field]: value 
            }
        );
    } 

    return (
        <View style={styles.card}>
            <TextInput style={styles.input} placeholder='name' onChangeText={(text)=>fillFormData(text, 'name')}/>
            <TextInput style={styles.input} placeholder='weight' onChangeText={(text)=>fillFormData(parseFloat(text), 'weight')}/>
            <TextInput style={styles.input} placeholder='heigth' onChangeText={(text)=>fillFormData(parseFloat(text), 'heigth')}/>
            <Text style={styles.text}>IMC: {imc}</Text>
            <View>
                <TouchableOpacity onPress={calculateIMC} style={styles.btn}>
                    <Text>Calculate IMC</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PersonCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:'lightgray',
        borderWidth:3,
        borderColor: 'black',
        flex:1
    },
    text: {
        fontSize: 24,
        color:'black',
        textAlign: 'center',
        margin: 10,
    },

    input:{
        height: 50,
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    btn:{
        backgroundColor: 'red',

    }
})