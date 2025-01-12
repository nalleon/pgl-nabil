import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstScreen22 from '../screens/FirstScreen22';
import SecondScreen22 from '../screens/SecondScreen22'


type Props = {}

type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalStack22 = (props: Props) => {
    return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#008080',
            },
            headerTintColor: 'white', 
            headerTitleAlign: 'center',
            headerBackVisible: false,
        }}
        >
        <Stack.Screen name="FirstScreen" component={FirstScreen22} options={{ title: 'Nabil' }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen22} options={{ title: 'Nabil' }} />
    </Stack.Navigator>
    )
}

export default PrincipalStack22

const styles = StyleSheet.create({})