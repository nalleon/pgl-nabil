import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import InitScreen from '../../screens/InitScreen';
import LocalHomeScreen from '../../screens/LocalHomeScreen';
import PlayLocalScreen from '../../screens/PlayLocalScreen';

type Props = {}


export type AuthStackParamList = {
    InitScreen: undefined,
    LoginScreen: undefined,
    RegisterScreen: undefined,
    LocalHomeScreen: undefined,
    PlayLocalScreen: undefined,
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNav = (props: Props) => {
    return (
        <Stack.Navigator id={undefined}
        screenOptions={{
            headerShown: false,
        }}
        
        >
            <Stack.Screen name="InitScreen" component={InitScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />    
            <Stack.Screen name="LocalHomeScreen" component={LocalHomeScreen} />  
            <Stack.Screen name="PlayLocalScreen" component={PlayLocalScreen} />  
        </Stack.Navigator>
    )
}

export default AuthStackNav

const styles = StyleSheet.create({})