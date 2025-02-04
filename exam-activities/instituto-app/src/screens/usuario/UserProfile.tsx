import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios, { spread } from 'axios';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';

import Icon  from 'react-native-vector-icons/Ionicons';
import { URL_INSTITUTO } from '../../utils/Utils';
import { UserNameContext } from '../../context/UserContext';
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

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
    const [refresh, setRefresh] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const context = useContext(UserNameContext);
    

    useEffect(() => {
        if(!context.nombreUsuario || !context.token){
          console.log('el nombre no esta seteado');
          return;
        }

        const fetchData = async () => {
          console.log("Nombre de usuario:", context.nombreUsuario);
          if (!context.nombreUsuario) {
              console.error("El nombre de usuario no está disponible");
              return;
          }

          const nombre =  context.nombreUsuario;
          const token = context.token;

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
          } catch (error) { 
              console.error("Error al obtener los datos:", error);
          }
      };

      fetchData();
    }, [])


    function refreshData() {
        setRefresh(!refresh);
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
      }
    
  return (
<ScrollView 
  style={styles.scrollContainer}
  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshData} />}
>
  <View style={styles.container}>
    <Text style={styles.textTitle}>Datos: </Text>
    {data ? (
      <>
        <Text style={styles.text}>Correo: {data.correo} </Text>
        <Text style={styles.text}>Nombre: {context.nombreUsuario} </Text>
        <Text style={styles.text}>Role: {context.rol}</Text>
      </>
    ) : (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#008080" />
        </View>
    )}
  </View>
</ScrollView>

  )
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      padding: 20,
      justifyContent: 'center',
      alignItems:'center'
    },
    scrollContainer: {
      flex: 1,
    },
    textTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      color: '#555',
      marginBottom: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
      },
    refreshContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
  });
  
  