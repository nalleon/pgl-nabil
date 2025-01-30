import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { URL_INSTITUTO } from '../../utils/Utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}
type AlumnoData = {
  dni: string,
  nombre : string,
  apellidos : string,
}
const DeleteAlumnoScreen = (props: Props) => {
  const [data, setData] = useState<AlumnoData[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          const token = await AsyncStorage.getItem("token");
          if (!token) {
              console.error("Token no disponible");
              return;
          }

          try {
              const response = await axios.get(`${URL_INSTITUTO}v3/alumnos`, {
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


  const handleDelete = async (dni : string) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.delete(`${URL_INSTITUTO}v3/alumnos/${dni}`, {
          headers: {
              Authorization: 'Bearer ' + token,
          },
      });
        console.log("Respuesta del servidor:", response.data); 
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
  }

  return (
      <View>
        {data ? 
          <FlatList
              data={data}
              renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleDelete(item.dni)}>
                      <View>
                        <Text>---- {item.nombre} {item.apellidos}</Text>
                      </View>
                  </TouchableOpacity>
              )}
              keyExtractor={(item, index) => item.nombre + "_" + item.apellidos + "_" + index}
              horizontal
          />
        :
          <Text>Permiso denegado</Text>
        }
      </View>
  )
}

export default DeleteAlumnoScreen

