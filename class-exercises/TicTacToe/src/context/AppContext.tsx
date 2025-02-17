import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


type Props = {
    children: React.ReactNode;
}
type AppContextType ={
    username: string,
    setUsername: (nombreUsuario: string) => void,
    token: string,
    setToken: (token: string) => void,
    role: string,
    setRole: (rol: string) => void,
    currentLocalGameId: number,
    setCurrentLocalGameId: (id: number) => void,
    isFinished : boolean,
    setIsFinished: (isFinished: boolean) => void,
    onlineGameId: number,
    setOnlineGameId: (id: number) => void,
}

export const AppContext = createContext<AppContextType>({} as AppContextType );
const AppContextProvider = (props: Props) => {
    const [username, setUsername] = useState<string>("");
    const [token, setToken] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [currentLocalGameId, setCurrentLocalGameId] = useState<number>(-1);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [onlineGameId, setOnlineGameId] = useState<number>(-1)

    const contextValues: AppContextType  = {
        username,
        setUsername,
        token,
        setToken,
        role,
        setRole,
        currentLocalGameId,
        setCurrentLocalGameId,
        isFinished,
        setIsFinished,
        onlineGameId,
        setOnlineGameId
    }
    
        return (
            <AppContext.Provider value={contextValues}>
                {props.children}
            </AppContext.Provider>
        )
    }
export default AppContextProvider

const styles = StyleSheet.create({})