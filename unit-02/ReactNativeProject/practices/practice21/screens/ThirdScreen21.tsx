import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}


type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
    ThirdScreen: {message : string, icon:string},
}
type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'ThirdScreen'>;


const ThirdScreen21 = (props: PropsProfile) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Third Screen</Text>
            <Text>Message received: {props.route.params.message}</Text>
            <Icon name={`${props.route.params.icon}-outline`} size={50} color={'blue'} />
            <Button title="Go to first screen" 
                onPress={() => props.navigation.navigate('FirstScreen')}/>
            <Button title="Go to second screen" 
                onPress={() => props.navigation.navigate('SecondScreen')}/>
        </View>
    )
}

export default ThirdScreen21

const styles = StyleSheet.create({})