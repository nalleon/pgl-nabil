import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons';

type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
    ThirdScreen: {message : string, icon:string},
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'FirstScreen'>;

const FirstScreen21 = (props: PropsHome) => {
    const [name, setName] = useState('');

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>First Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title="Go to second screen" 
                onPress={() => props.navigation.navigate('SecondScreen')}/>
            <Button title="Go to third screen" 
                onPress={() => props.navigation.navigate('ThirdScreen', {message: `Greetings ${name}!`, icon : "home"})}/>
            <Icon name='car-outline' size={50} color={'blue'} />
        </View>
    )
}

export default FirstScreen21

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        paddingLeft: 10,
    },
})