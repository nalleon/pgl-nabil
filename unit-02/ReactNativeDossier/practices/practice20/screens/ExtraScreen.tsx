import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}


type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
    Extra: {message: string, icon : string},
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'Extra'>;


const ExtraScreen = (props: PropsProfile) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Extra Screen</Text>
            <Text>Message received: {props.route.params.message}</Text>
            <Icon name={`${props.route.params.icon}-outline`} size={50} color={'blue'} />
            <Button title="Go to Home" 
                onPress={() => props.navigation.navigate('Home')}/>
            <Button title="Go to Profile" 
                onPress={() => props.navigation.navigate('Profile')}/>
        </View>
    )
}

export default ExtraScreen

const styles = StyleSheet.create({})