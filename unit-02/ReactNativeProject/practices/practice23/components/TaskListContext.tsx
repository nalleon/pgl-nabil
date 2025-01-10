import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

type Props = {
    children: React.ReactNode;
}

type TaskListContextType ={
    tasks: Task[],
    setTasks: (tasks: Task[]) => void,
    nextId: () => number,
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}



export const TasksContext = createContext<TaskListContextType >({} as TaskListContextType );

const TaskListContext = (props: Props) => {
    const [tasks, setTasks] = useState<Task[]>([]);


    function nextId(){
        if (tasks.length === 0){
            return 1;
        }

        let lastTask = tasks[tasks.length - 1];

        return lastTask.id+1;
    }

    const contextValues: TaskListContextType  = {
        tasks,
        setTasks,
        nextId
    }

    
    return (
        <TasksContext.Provider value={contextValues}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TaskListContext

const styles = StyleSheet.create({})