import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_API as URL_API } from '../utils/Utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/AppContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';



const UseApi = () => {

    const context = useContext(AppContext);
    
    const handleLogin = async (username : string, password : string) => {
        if(!username || username.trim() === "" || !password || password.trim() === ""){
            return false;
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
                await AsyncStorage.setItem("username", username);
                context.setUsername(username);
                context.setToken(response.data);
                return true;
                } catch(error){
                    console.error("Error al guardar el token: "+  error);
                } 
                
            }
            } catch (error) {
                console.error("Error al iniciar sesión", error);
        }

        return false;
    };

    const handleRegister = async (username : string, email : string, password : string) => {
        if(!username || username.trim() === "" || !password || password.trim() === "" || !email || email.trim() === ""){
            return false;
        }
        
        console.log(`${URL_API}/v1/auth/register`);
        try {
            const response = await axios.post(`${URL_API}/v1/auth/register`, {
                    name: username,
                    email: email,
                    password: password 
                },
                {
                headers:{
                    'Content-Type': 'application/json'
                }   
                }
            );

            
            if (response.data) {
                return true;
            }

        } catch (error) {
            console.error("Error while register", error);
        }

        return false;
    };

    return {
        handleLogin, handleRegister
    }

}

export default UseApi

