import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons';

type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
    Extra: {message: string, icon : string},
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'Home'>;

const HomeScreen = (props: PropsHome) => {

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
            <Button title="Go to Profile" 
                onPress={() => props.navigation.navigate('Profile')}/>
            <Button title="Go to Extra" 
                onPress={() => props.navigation.navigate('Extra', {message: "Greetings from Home", icon : "home"})}/>
            <Icon name='car-outline' size={50} color={'blue'} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})