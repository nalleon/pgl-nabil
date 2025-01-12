import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons';

type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'FirstScreen'>;

const FirstScreen22 = (props: PropsHome) => {

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>First Screen</Text>
            <Button title="Go to second screen" 
                onPress={() => props.navigation.navigate('SecondScreen')}/>
        </View>
    )
}

export default FirstScreen22

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