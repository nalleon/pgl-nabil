import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Touchable } from 'react-native';

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

type PropsTask = NativeStackScreenProps<PrincipalStackParamList, 'Task'>;


const TaskScreen = (props: PropsTask) => {
    const [taskData, setTaskData] = useState<Task>({} as Task);

    function updateTask(value: string|boolean, field: keyof Task){
        setTaskData(
            {
                ...taskData,
                [field]: value
            }
        );
    }

    function handleOnPress(){
        props.navigation.navigate('ToDoList');
    }


    return (
        <View style={{flex:1}}>
            <Text>Active: 
                <Switch
                    onValueChange={()=> updateTask(!taskData.completed, 'completed')}
                    value={taskData.completed}
                />
            </Text>

            <View>
                <TextInput placeholder='Task content here' onChangeText={(e) => updateTask(e, 'content')}/>
            </View>
            
            <TouchableOpacity onPress={handleOnPress}>
                <Text>Finish editing</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskScreen

const styles = StyleSheet.create({})