import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskScreen from './TaskScreen'
import TaskStack from '../navigates/TaskStack'
import ToDoListScreen from './ToDoListScreen'
import TaskListContext, { TasksContext } from '../components/TaskListContext'
import { NavigationContainer } from '@react-navigation/native'

type Props = {}


type Task = {
    id: number,
    content: string,
    completed: boolean,
}

const Practice23Screen = (props: Props) => {
    return (
            <TaskListContext>
                { /**<NavigationContainer> */}
                    <TaskStack />
                { /**</NavigationContainer>*/}
            </TaskListContext>
    )
}

export default Practice23Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})