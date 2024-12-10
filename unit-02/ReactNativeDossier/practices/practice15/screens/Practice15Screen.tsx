import { SafeAreaView, StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import React, { useState } from 'react'

type Props = {}


type FormData = {
    jubilado: boolean,
    casado: boolean,
    edad: number,
    nombre:string
}

const Practice15Screen = (props: Props) => {
    const [formData, setFormData] = useState<FormData>({} as FormData);

    function fillFormData (value : boolean|number|string, field: keyof FormData){
        setFormData(
            {   
                ...formData, 
                [field]: value 
            }
        );
    } 
    
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Text>Jubilado: {formData.jubilado? 'Si' : 'No'}
                    <Switch
                        onValueChange={()=> fillFormData(!formData.jubilado, 'jubilado')}
                        value={formData.jubilado}
                    />
                </Text>
                <Text>Casado: {formData.casado? 'Si' : 'No'}

                    <Switch
                        onValueChange={()=> fillFormData(!formData.casado, 'casado')}
                        value={formData.casado}
                    />
                </Text>

                <TextInput placeholder='nombre' onChangeText={(text)=>fillFormData(text, 'nombre')}/>
                <TextInput placeholder='edad' onChangeText={(text)=>fillFormData(text, 'edad')}/>
            </View>
        </SafeAreaView>
    )   
}

export default Practice15Screen

const styles = StyleSheet.create({})