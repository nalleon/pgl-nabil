import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskScreen from './TaskScreen'
import TaskStack from '../navigates/TaskStack'

type Props = {}


type Task = {
    id: number,
    content: string,
    completed: boolean,
}

const Practice23Screen = (props: Props) => {
    return (
            <TaskStack/>
    )
}

export default Practice23Screen

const styles = StyleSheet.create({})