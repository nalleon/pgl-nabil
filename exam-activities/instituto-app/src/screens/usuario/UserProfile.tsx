import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios, { spread } from 'axios';
import { FlatList } from 'react-native-gesture-handler';

import Icon  from 'react-native-vector-icons/Ionicons';
import { URL_INSTITUTO } from '../../utils/Utils';
import { UserNameContext } from '../../context/UserContext';
import  AsyncStorage  from '@react-native-async-storage/async-storage'

type Props = {}

type UserData = {
    correo : string,
    nombre : string
}
const UserProfile = (props: Props) => {
    /**
     * UseStates
     */
    const [data, setData] = useState<UserData>({} as UserData);
    
    const context = useContext(UserNameContext);

    useEffect(() => {
        if(!context.nombreUsuario){
          console.log('el nombre no esta seteado');
          return;
        }

        const fetchData = async () => {
          console.log("Nombre de usuario:", context.nombreUsuario);
          if (!context.nombreUsuario) {
              console.error("El nombre de usuario no está disponible");
              return;
          }

          const nombre =  await AsyncStorage.getItem("nombreusuario");

          const token = await AsyncStorage.getItem("token");
          console.log("Token:", token);
          if (!token) {
              console.error("Token no disponible");
              return;
          }

          try {
              const response = await axios.get(`${URL_INSTITUTO}v2/usuarios/nombre/${nombre}`, {
                  headers: {
                      Authorization: 'Bearer ' + token,
                  },
              });
              console.log("Respuesta del servidor:", response.data); 
              let userData = response.data.data;
              setData(userData); 
              console.log(data);
              //console.log(JSON.parse(token));
          } catch (error) { 
              console.error("Error al obtener los datos:", error);
          }
      };

      fetchData();
    }, [])



    
  return (
    <View>
        <Text>Datos:</Text>
            {data ? (
                <>
                    <Text>Correo: {data.correo}</Text>
                    <Text>Nombre: {data.nombre}</Text>
                </>
            ) : (
                <Text>Cargando...</Text>
            )}
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})