import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { URL_INSTITUTO } from '../../utils/Utils'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { styles } from '../../theme/LoginStyle'

type Props = {}
type AlumnoData = {
  dni: string,
  nombre : string,
  apellidos : string,
}

const FindAlumno = (props: Props) => {
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
        const response = await axios.get(`${URL_INSTITUTO}v3/alumnos/nombre/${nombre}`, {
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={busqueda}
        onChangeText={setBusqueda}
      />
    
      <TouchableOpacity style={styles.button} onPress={() => fetchData(busqueda)}>
        <Text style={styles.buttonText}>Buscar </Text>
      </TouchableOpacity>



      <FlatList
        data={data}
        renderItem={({ item }) => (
            <View>
                <Text>{item.nombre} {item.apellidos}</Text>
            </View>
        )}
        keyExtractor={(item, index) => item.nombre + "_" + item.apellidos + "_" + index}
        horizontal
      />
    </View>
  )
}

export default FindAlumno

