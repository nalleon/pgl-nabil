import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { styles } from './InitScreen';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_API as URL_API } from '../utils/Utils';
import { AppContextProvider } from '../context/AppContext';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LoginScreen = (props: AuthProps) => {
    const [logged, setLogged] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const context = useContext(AppContextProvider);
    
    useEffect(() => {
        setLogged(false);
    }, [])
    


    const handleLogin = async (nombre : string, password : string) => {
        if(!nombre || nombre.trim() === "" || !password || password.trim() === ""){
            return;
        }
        
        try {
            const response = await axios.post(`${URL_API}login`, {
                    nombre,
                    password 
                },
                {
                headers:{
                    'Content-Type': 'application/json'
                }   
                }
            );

            console.log("Respuesta del servidor: ", response.data);
        
            
            if (response.data) {
                try {
                await AsyncStorage.setItem("token", response.data);
                await AsyncStorage.setItem("nombreusuario", nombre);
                context.setUsername(nombre);
                context.setToken(response.data);


                setLogged(true);
                } catch(error){
                    console.error("Error al guardar el token: "+  error);
                } 
                
            }
            } catch (error) {
                console.error("Error al iniciar sesión", error);
        }
    };



return (
    <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            />

        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        
        <TouchableOpacity style={styles.button} onPress={() => handleLogin(username, password)}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => props.navigation.navigate('RegisterScreen')}>
            <Text>Not registered yet? Press here</Text>
        </TouchableOpacity>

    </View>
    )
}

export default LoginScreen;
