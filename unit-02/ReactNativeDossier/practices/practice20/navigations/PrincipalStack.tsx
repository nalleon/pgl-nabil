import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ExtraScreen from '../screens/ExtraScreen'

type Props = {}

type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
    Extra: {message : string, icon:string},
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false,contentStyle:{backgroundColor:'lightblue'}}}
        
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Extra" component={ExtraScreen} />
        </Stack.Navigator>
    )
}

export default PrincipalStack

const styles = StyleSheet.create({})