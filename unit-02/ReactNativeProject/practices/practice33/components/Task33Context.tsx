import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

type Props = {
    children: React.ReactNode;
}

type TaskListContextType ={
    tasks: Task[],
    setTasks: (tasks: Task[]) => void,
    nextID: number,
    setNextID: (num : number) => void
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}



export const TasksContext33 = createContext<TaskListContextType >({} as TaskListContextType );

const Task33Context = (props: Props) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [nextID, setNextID] = useState(1)

    const contextValues: TaskListContextType  = {
        tasks,
        setTasks,
        nextID,
        setNextID
    }

    
    return (
        <TasksContext33.Provider value={contextValues}>
            {props.children}
        </TasksContext33.Provider>
    )
}

export default Task33Context

const styles = StyleSheet.create({})