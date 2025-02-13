import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import InitScreen from '../../screens/InitScreen';
import LocalHomeScreen from '../../screens/LocalHomeScreen';

type Props = {}


export type AuthStackParamList = {
    InitScreen: undefined,
    Login: undefined,
    Register: undefined,
    LocalHomeScreen: undefined
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
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />    
            <Stack.Screen name="LocalHomeScreen" component={LocalHomeScreen} />  
        </Stack.Navigator>
    )
}

export default AuthStackNav

const styles = StyleSheet.create({})