import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstScreen21 from '../screens/FirstScreen21';
import SecondScreen21 from '../screens/SecondScreen21'
import ThirdScreen21 from '../screens/ThirdScreen21'

type Props = {}

type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
    ThirdScreen: {message : string, icon:string},
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false,contentStyle:{backgroundColor:'lightblue'}}}
        
        >
            <Stack.Screen name="FirstScreen" component={FirstScreen21} />
            <Stack.Screen name="SecondScreen" component={SecondScreen21} />
            <Stack.Screen name="ThirdScreen" component={ThirdScreen21} />
        </Stack.Navigator>
    )
}

export default PrincipalStack

const styles = StyleSheet.create({})