import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { URL_INSTITUTO } from '../../utils/Utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

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


  const handleModify = async (dni : string) => {
    /**
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
    }*/
  }

  return (
      <View style={styles.container}>
        {data ? 
          <FlatList
              data={data}
              renderItem={({ item }) => (
                  <View style={styles.task} >
                      <TouchableOpacity onPress={() => handleModify(item.dni)} style={styles.taskContent}>
                              <Text style={styles.taskText}>{item.nombre} {item.apellidos}</Text>
                      </TouchableOpacity>
                        
                      <View style={styles.taskActions}>
                          <TouchableOpacity onPress={() => handleModify(item.dni)} style={styles.taskActionIcon}>
                              <Icon name='pencil' size={25} color={'grey'}></Icon>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => handleDelete(item.dni)} style={styles.taskActionIcon}>
                              <Icon name='trash' size={25} color={'grey'} />
                          </TouchableOpacity>
                      </View>
                  </View>
              )}
              keyExtractor={(item, index) => item.nombre + "_" + item.apellidos + "_" + index}
              horizontal
          />
        :
          <Text style={styles.title}>Permiso denegado</Text>
        }
      </View>
  )
}

export default DeleteAlumnoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  btnText: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
  },

  task:{
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 5,
      marginBottom: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: 50,
      backgroundColor: "#fff",
      borderRadius: 8,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: "#008080",
  },

  taskText: {
      fontSize: 18,
      marginLeft: 10,
      textDecorationLine: 'none',
  },

  taskTextCompleted: {
      fontSize: 18,
      marginLeft: 10,
      textDecorationLine: 'line-through'
  },


  taskActions: {
      flexDirection: 'row',
      marginLeft: 'auto', 
  },

  taskActionIcon: {
      marginLeft: 10,
  },

  taskContent: {
      flex: 1,
  },

  title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 10,
      marginBottom: 10,
      textAlign: 'center'
  }

  

})