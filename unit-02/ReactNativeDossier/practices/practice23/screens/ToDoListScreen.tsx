import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}

type PropsToDoList = NativeStackScreenProps<PrincipalStackParamList, 'ToDoList'>;


const ToDoListScreen = (props: PropsToDoList) => {

    //TODO: implement context
    const context = "";

    function createTask (){

    }


    return (
        <View>
            <Text>ToDoList</Text>


            <TouchableOpacity onPress={createTask}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDoListScreen

const styles = StyleSheet.create({})