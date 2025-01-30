import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../../theme/LoginStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserNameContext } from '../../context/UserContext'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type AuthScreens = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    DrawerNav: undefined,
}
  
type LoginProps = NativeStackScreenProps<AuthScreens, "DrawerNav">

const LogoutScreen = (props: LoginProps) => {
    const [logged, setLogged] = useState<boolean>(true)

    const context = useContext(UserNameContext);
        
    useEffect(() => {
        if(!logged){
            props.navigation.reset({
                routes: [{ name: 'LoginScreen' }],
            });
        }
    }, [logged])

    const handleLogout = async () => {
            try {
                await AsyncStorage.removeItem("token");
                await AsyncStorage.removeItem("nombreusuario");
                context.setNombreUsuario("");
                context.setToken("");
                setLogged(false);
                console.log(context.token, context.nombreUsuario);
            } catch(error){
                console.error("Error al elininar los elementos del async storage: "+  error);
            } 
    };


    return (
    <View style={styles.container}>
        <Text style={styles.title}>¿Cerrar sesión?</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>
    )
}

export default LogoutScreen
