import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskScreen from '../screens/TaskScreen';
import ToDoListScreen from '../screens/ToDoListScreen';

type Props = {}

type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const TaskStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{contentStyle:{backgroundColor:'darkblue'}}}
        >
            
            <Stack.Screen name="ToDoList" component={ToDoListScreen} />
            <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Navigator>
    )
}

export default TaskStack

const styles = StyleSheet.create({})