import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { URL_INSTITUTO } from '../../../utils/Utils'

type Props = {}
type AlumnoData = {
  dni: string,
  nombre : string,
  apellidos : string,
}




const AlumnoList = (props: Props) => {
  const [data, setData] = useState<AlumnoData[]>([]);
  const [busqueda, setBusqueda] = useState<string>("");
  

  useEffect(() => {

  }, [data])


  const fetchData = async (nombre : string) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
        console.error("Token no disponible");
        return;
    }

    try {
        const response = await axios.get(`${URL_INSTITUTO}v2/alumnos/nombre/${nombre}`, {
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



  return (
    <View style={{...styles.container, flexDirection:'column'}}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={busqueda}
        onChangeText={setBusqueda}
      />
    
      <TouchableOpacity style={styles.button} onPress={() => fetchData(busqueda)}>
        <Text style={styles.buttonText}> Buscar </Text>
      </TouchableOpacity>

      {data &&
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.task}>
                    <Text style={styles.taskText}>{item.nombre} {item.apellidos}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.nombre + "_" + item.apellidos + "_" + index}
            style={{marginTop:20}}
        />
      }
    
    </View>
  )
}

export default AlumnoList

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
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#008080",
  },
  button: {
    width: "100%",
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
