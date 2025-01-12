import { StyleSheet, Text, TouchableOpacity, View, Touchable, FlatList, FlatListComponent } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TaskListContext, { TasksContext } from '../components/TaskListContext'
import Icon from 'react-native-vector-icons/Ionicons';

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

    const context = useContext(TasksContext);

    function createTask (){
        const newTask = {
            id: context.nextID,
            content: '',
            completed: false,
        };
    
        context.setTasks([...context.tasks, newTask]);
        context.setNextID(context.nextID + 1); 
    
        props.navigation.navigate('Task', { id: newTask.id });
    }
    
    function changeStatus(taskId : number){
        let updatedList = context.tasks;

        for (let i = 0; i < updatedList.length; i++){
            if (updatedList[i].id === taskId){
                updatedList[i].completed =!updatedList[i].completed;
                break;
            }
        }

        context.setTasks([...updatedList]);
    }

    function deleteTask(taskId : number){
        let updatedList = [];

        for (let i = 0; i < context.tasks.length; i++){
            if (context.tasks[i].id !== taskId){
                updatedList.push(context.tasks[i]);
            }
        }

        context.setTasks(updatedList);
    }

    return (
        <View style={{flex:1}}>            
            <View>
                <FlatList
                    data={context.tasks}
                    renderItem={(task) => {
                    return (
                        <View key={task.index} style={styles.task}>

                            <TouchableOpacity onPress={() => changeStatus(task.item.id)} style={styles.taskLeftIcon}>
                                <Icon name={!task.item.completed ? `square-outline` : `checkbox-outline`} size={25} color={'#e3c181'}></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => props.navigation.navigate('Task', {id: task.item.id})} style={styles.taskContent}>
                                <Text style={task.item.completed ? styles.taskTextCompleted : styles.taskText}>{task.item.content}</Text>
                            </TouchableOpacity>
                            
                            <View style={styles.taskActions}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Task', {id: task.item.id})} style={styles.taskActionIcon}>
                                    <Icon name='pencil' size={25} color={'grey'}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => deleteTask(task.item.id)} style={styles.taskActionIcon}>
                                    <Icon name='trash' size={25} color={'grey'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                        }}
                    keyExtractor={(task, index) => task.content + index}
                />
            </View>
            {
                /**<View>
                    <Text>{JSON.stringify(context.tasks)}</Text>
                </View>*/
            }
            <View style={styles.container}>
                <TouchableOpacity onPress={() => createTask()}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ToDoListScreen

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#e3c181',
    },

    btnText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    task:{
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        flex:1
    },

    taskText: {
        fontSize: 18,
        marginLeft: 10,
        textDecorationLine: 'none',
    },

    taskTextCompleted: {
        fontSize: 18,
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },

    taskLeftIcon:{
        justifyContent: 'flex-start'
    },

    taskActions: {
        flexDirection: 'row',
        marginLeft: 'auto', 
    },

    taskActionIcon: {
        marginLeft: 10,
    },

    taskContent: {
        flex: 1,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10,
        textAlign: 'center'
    }

    

})