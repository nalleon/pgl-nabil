import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { styles } from '../theme/LoginStyle';
import { TextInput } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {}


type AuthScreens = {
    LoginScreen: undefined,
    RegisterScreen: undefined
}
  
type LoginProps = NativeStackScreenProps<AuthScreens, "LoginScreen">

const LoginScreen = (props: LoginProps) => {

    const [nombre, setNombre] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const url = "http://172.16.0.110:8080/instituto/api/login";

    useEffect(() => {
        
    }, [])

    const handleLogin = async (nombre : string, password : string) => {
        if(!nombre || nombre.trim() === "" || !password || password.trim() === ""){
            return;
        }

        try {
          const response = await axios.post(`${url}`, {
                
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
            await AsyncStorage.setItem("token", response.data);
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
        placeholder="Nombre de usuario"
        value={nombre}
        onChangeText={setNombre}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={styles.button} onPress={() => handleLogin(nombre, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => props.navigation.navigate('RegisterScreen')}>
        <Text>¿No estas registrado? Registrate</Text>
      </TouchableOpacity>

      <Text ></Text>
    </View>
  )
}

export default LoginScreen
