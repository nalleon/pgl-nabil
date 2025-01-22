import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Touchable } from 'react-native';
import { TasksContext33 } from '../components/Task33Context';
import { TaskRepository } from '../data/Database';

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
    const context = useContext(TasksContext33);

    useEffect(() => {
        async function getSelectedTask(id:number){
            const task = await TaskRepository.findOneBy({id: id});
            if (task) {
                setTaskData(task); 
            }
        }
        getSelectedTask(props.route.params.id);
    }, [props.route.params.id]);



    function updateTask(value: string|boolean, field: keyof Task){
        setTaskData(
            {
                ...taskData,
                [field]: value
            }
        );
    }

    async function handleOnPress(){
        if (!taskData.content || taskData.content.trim() === '') {
            await TaskRepository.delete({ id: taskData.id });
            const updatedTaskList = await TaskRepository.find();
            context.setTasks(updatedTaskList);
            props.navigation.goBack();
            return;
        }
        await TaskRepository.save({...taskData });
        const updatedTaskList = await TaskRepository.find();
        context.setTasks(updatedTaskList);

        props.navigation.goBack();
    }


    return (
        <View style={{flex:1}}>
            <View style={styles.active}>
                <Text style={styles.activeText}>Completed:</Text>
                    <Switch
                        onValueChange={()=> updateTask(!taskData.completed, 'completed')}
                        value={taskData.completed}
                    />
            </View>

            <View>
                <TextInput placeholder='Task content here' 
                value={taskData.content}
                onChangeText={(e) => updateTask(e, 'content')}/>
            </View>
            
            <TouchableOpacity onPress={handleOnPress} style={styles.container}>
                <Text style={styles.btntext}>Finish editing</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskScreen

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#e3c181',
    },

    active:{
        flexDirection:'row',
        padding: 10,
        backgroundColor: 'grey',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    activeText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    btntext: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    task:{
        flexDirection: 'row',
    },

    taskText: {
        fontSize: 18,
        marginLeft: 10
    }
})