import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'SecondScreen'>;


const SecondScreen22 = (props: PropsProfile) => {
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Second Screen</Text>
            <Button title="Go to first screen" 
                onPress={() => props.navigation.navigate('FirstScreen')}/>

        </View>
    )
}

export default SecondScreen22

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