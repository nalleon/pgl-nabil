import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskScreen from '../screens/TaskScreen';
import ToDoListScreen from '../screens/ToDoListScreen';
import { NavigationContainer } from '@react-navigation/native';

type Props = {}

type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const TaskStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
            <Stack.Screen 
                name="ToDoList" 
                component={ToDoListScreen} 
                options={{ title: 'Tasks',  headerTitleAlign: 'center', 
                    headerStyle: {
                        backgroundColor: '#e3c181', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                }}
            />
            
            <Stack.Screen 
                name="Task" 
                component={TaskScreen} 
                options={({ route }) => ({
                    title: `Editing task ${route.params.id}`,  headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#e3c181', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                })} 
            />
        </Stack.Navigator>
    )
}

export default TaskStack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})