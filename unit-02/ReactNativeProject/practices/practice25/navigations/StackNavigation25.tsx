import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import HomeScreen25 from '../screens/HomeScreen25';

type Props = {}


export type PrincipalStackParamList = {
    HomeScreen25: undefined;
};
    
const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const StackNavigation25 = (props: Props) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#008080' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
        }}
        >
        <Stack.Screen 
            name="HomeScreen25" 
            component={HomeScreen25} 
            options={{ title: 'Home' }} 
        />

        </Stack.Navigator>
    )
}

export default StackNavigation25

const styles = StyleSheet.create({})