import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
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


  function showConfirmation (dni : string){
    Alert.alert(`Eliminar`,`¿Está seguro de que desea borrar el alumno cuyo dni es ${dni}?`,
      [
        {
          text: 'No',
          onPress: () => console.log('No se ha eliminado el alumno'),
          style: 'cancel'
        },
        {
          text: 'Sí',
          onPress: () => handleDelete(dni),
          style:'destructive'
        }

      ]
    )
  }

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
                      <Text style={styles.taskText}>{item.nombre} {item.apellidos}</Text>
                      <View style={styles.taskActions}>
                          <TouchableOpacity onPress={() => showConfirmation(item.dni)} style={styles.taskActionIcon}>
                              <Icon name='close' size={35} color={'#d1234e'} />
                          </TouchableOpacity>
                      </View>
                  </View>
              )}
              keyExtractor={(item, index) => item.nombre + "_" + item.apellidos + "_" + index}
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
    backgroundColor: "#f4f4f4",
    padding: 20,
  },

  btnText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  task: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#008080",
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3, 
  },

  taskText: {
    fontSize: 17,
    flex: 1,
    marginLeft: 25,
    color: '#333',
  },

  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskActionIcon: {
    marginLeft: 15,
    padding: 5,
    borderRadius: 5,
  },

  taskContent: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#008080',
  },
});
