import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoListScreen from '../../practice23/screens/ToDoListScreen';
import Practice10Screen from '../../practice10/screens/Practice10Screen';
import Practice23Screen from '../../practice23/screens/Practice23Screen';

type Props = {}


export type PrincipalStackParamList = {
    CalcScreen: undefined;
};
    
const Stack = createNativeStackNavigator<PrincipalStackParamList>();


const StackNav27 = (props: Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CalcScreen" component={Practice10Screen} />
        </Stack.Navigator>
    )
}

export default StackNav27

const styles = StyleSheet.create({})