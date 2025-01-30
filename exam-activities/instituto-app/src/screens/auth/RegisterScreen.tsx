import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { styles } from '../../theme/LoginStyle';
import { TextInput } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserNameContext } from '../../context/UserContext';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { URL_INSTITUTO as URL_INSTITUTO } from '../../utils/Utils';

type Props = {}

type AuthScreens = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    DrawerNav: undefined,
    LogoutScreen: undefined
}
  
type RegisterProps = NativeStackScreenProps<AuthScreens, "RegisterScreen">

const RegisterScreen = (props: RegisterProps) => {
  const [registered, setRegistered] = useState<boolean>(false)
  const [nombre, setNombre] = useState<string>("")
  const [correo, setCorreo] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  
  useEffect(() => {
    setRegistered(false);
  }, [])
  

  useEffect(() => {
    if (registered) {
      props.navigation.navigate('LoginScreen');
    }
  }, [registered]);

  const handleRegister = async (nombre : string, correo: string, password : string) => {
      if(!nombre || nombre.trim() === "" || !password || password.trim() === ""){
          return;
      }

      try {
        const response = await axios.post(`${URL_INSTITUTO}register`, {
              nombre,
              correo,
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
            setRegistered(true);
        }
      } catch (error) {
        console.error("Error al iniciar sesión", error);
      }
  };


    
return (
<View style={styles.container}>
    <Text style={styles.title}>Regustrarse</Text>
    
    <TextInput
      style={styles.input}
      placeholder="Nombre de usuario"
      value={nombre}
      onChangeText={setNombre}
    />
    
    <TextInput
      style={styles.input}
      placeholder="Correo electrónico"
      value={correo}
      onChangeText={setCorreo}
    />

    <TextInput
      style={styles.input}
      placeholder="Contraseña"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    
    <TouchableOpacity style={styles.button} onPress={() => handleRegister(nombre, correo, password)}>
      <Text style={styles.buttonText}>Registrarse</Text>
    </TouchableOpacity>

    <TouchableOpacity  onPress={() => props.navigation.navigate('LoginScreen')}>
      <Text>¿Ya tienes una cuenta? Inicia sesión</Text>
    </TouchableOpacity>

  </View>
)
}


export default RegisterScreen

