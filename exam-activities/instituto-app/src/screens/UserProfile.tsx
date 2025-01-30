import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios, { spread } from 'axios';
import { FlatList } from 'react-native-gesture-handler';

import Icon  from 'react-native-vector-icons/Ionicons';
import { URL } from '../utils/Utils';
import { UserNameContext } from '../context/UserContext';
import  AsyncStorage  from '@react-native-async-storage/async-storage'

type Props = {}

type UserData = {
    name : string,
    email : string
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

          const token = await AsyncStorage.getItem("token");
          console.log("Token:", token);
          if (!token) {
              console.error("Token no disponible");
              return;
          }

          try {
              const response = await axios.get(`${URL}v2/usuarios/${context.nombreUsuario}`, {
                  headers: {
                      Authorization: 'Bearer ' + token,
                  },
              });
              console.log("Respuesta del servidor:", response.data); 
              let userData = response.data as UserData;
              setData(userData); 
          } catch (error) {
              console.error("Error al obtener los datos:", error);
          }
      };

      fetchData();
    }, [context.nombreUsuario])
    

  return (
    <View>
        <Text>
            { data.name }
            ---
            { data.email}
        </Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})