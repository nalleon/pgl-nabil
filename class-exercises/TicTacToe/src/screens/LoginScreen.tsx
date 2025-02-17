import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { styles } from './InitScreen';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_API as URL_API } from '../utils/Utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/AppContext';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LoginScreen = (props: AuthProps) => {
    const [logged, setLogged] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const context = useContext(AppContext);
    
    useEffect(() => {
        setLogged(false);
    }, [])
    


    const handleLogin = async (username : string, password : string) => {
        if(!username || username.trim() === "" || !password || password.trim() === ""){
            return;
        }
        
        console.log(`${URL_API}/v1/auth/login`);
        try {
            const response = await axios.post(`${URL_API}/v1/auth/login`, {
                    name: username,
                    password: password 
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
                await AsyncStorage.setItem("nombreusuario", username);
                context.setUsername(username);
                context.setToken(response.data);


                setLogged(true);
                props.navigation.navigate('RemoteHomeScreen');

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
            <Icon name={'person-circle'} color={'#008080'} size={100} style={{marginTop:20}}/>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
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
        <View style={{flex:2,justifyContent:'flex-end'}}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('InitScreen')}>
            <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>

    </View>
    )
}

export default LoginScreen;
