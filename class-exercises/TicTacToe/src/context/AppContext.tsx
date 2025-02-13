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
}

export const AppContextProvider = createContext<AppContextType>({} as AppContextType );
const AppContext = (props: Props) => {
    const [username, setUsername] = useState<string>("");
    const [token, setToken] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [currentLocalGameId, setCurrentLocalGameId] = useState<number>(-1);

    useEffect(() => {
        async () => {
            const tokenStorage = await AsyncStorage.getItem("token");
            if(tokenStorage){
            setToken(tokenStorage);
            }
        }

    }, [token])

    useEffect(() => {
    
        async () => {
            const userStorage = await AsyncStorage.getItem("nombreusuario");
        
            if(userStorage){
            setUsername(userStorage);
            }
        }
    
    }, [username])
    
    useEffect(() => {
        async () => {
            const roleStorage = await AsyncStorage.getItem("rol");
        
            if(roleStorage){
            setRole(roleStorage);
            }
        }
    }, [role])

    const contextValues: AppContextType  = {
        username,
        setUsername,
        token,
        setToken,
        role,
        setRole,
        currentLocalGameId,
        setCurrentLocalGameId
    }
    
        return (
            <AppContextProvider.Provider value={contextValues}>
                {props.children}
            </AppContextProvider.Provider>
        )
    }
    export default AppContext

const styles = StyleSheet.create({})