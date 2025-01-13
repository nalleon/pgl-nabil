import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Practice10Screen from '../../practice10/screens/Practice10Screen';
import LinksScreen24 from '../screens/LinksScreen24';
import Practice23Screen from '../../practice23/screens/Practice23Screen';

type Props = {}

export type PrincipalStackParamList = {
    LinksScreen: undefined;
    CalcScreen: undefined;
    ToDoScreen : undefined;
};

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const StackNavigation24 = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#008080' },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
            }}
            >
            <Stack.Screen 
                name="LinksScreen" 
                component={LinksScreen24} 
                options={{ title: 'Links' }} 
            />
            <Stack.Screen 
                name="CalcScreen" 
                component={Practice10Screen} 
                options={{ title: 'Calc' }} 
            />
            
            <Stack.Screen 
                name="ToDoScreen" 
                component={Practice23Screen} 
                options={{ title: 'To Do List' }} 
            />
        </Stack.Navigator>
    )
}

export default StackNavigation24

const styles = StyleSheet.create({})