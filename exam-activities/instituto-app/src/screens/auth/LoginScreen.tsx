import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { styles } from '../../theme/LoginStyle';
import { TextInput } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { URL_INSTITUTO } from '../../utils/Utils';
import { UserNameContext } from '../../context/UserContext';
import { useJwt } from "react-jwt"


type Props = {}


type AuthScreens = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    DrawerNav: undefined,
}
  
type LoginProps = NativeStackScreenProps<AuthScreens, "LoginScreen">

const LoginScreen = (props: LoginProps) => {
    
    const [logged, setLogged] = useState<boolean>(false)
    const [nombre, setNombre] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const context = useContext(UserNameContext);
    
    useEffect(() => {
      setLogged(false);
    }, [])
    

    useEffect(() => {
      if (logged) {
          props.navigation.reset({
              routes: [{ name: 'DrawerNav' }],
          });
      }
    }, [logged]);

    const handleLogin = async (nombre : string, password : string) => {
        if(!nombre || nombre.trim() === "" || !password || password.trim() === ""){
            return;
        }

        try {
          const response = await axios.post(`${URL_INSTITUTO}login`, {
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
              context.setNombreUsuario(nombre);
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

    </View>
  )
}

export default LoginScreen
