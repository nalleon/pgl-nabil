import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { URL_INSTITUTO } from '../../utils/Utils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserNameContext } from '../../context/UserContext';

type Props = {}

const AddMatricula = (props: Props) => {
  
  const [year, setYear] = useState<string>("");
  const [asignaturasId, setAsignaturasId] = useState<string>("");
  const [dni, setDNI] = useState<string>("");

  const context = useContext(UserNameContext);
  useEffect(() => {

  }, [])
  

  const create = async () => {
      if(!asignaturasId || !asignaturasId){
          return;
      }

      try {
        const token = context.token;

        const arr: number[] = asignaturasId.split(",").map(Number);
        console.log(arr); 


        const response = await axios.post(`${URL_INSTITUTO}v3/matriculas`, {
              year: year,
              asignaturasId: arr,
              alumno: dni
          },
          {
            headers:{
              Authorization: 'Bearer ' + token,
            }   
          }
      );

        console.log("Respuesta del servidor: ", response.data);
    
      } catch (error) {
        console.error("Error al actualziar la asignatura: ", error.response || error.message);
        if (error.response) {
            console.log("Detalles del error: ", error.response.data);
        }
    }
    
  };


    
return (
  <View style={styles.container}>
      <Text style={styles.title}>Crear nueva matrícula</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Año de la matricula"
        value={year}
        onChangeText={(text)=>setYear(text)}
      />
            
      <TextInput
        style={styles.input}
        placeholder="Asignaturas"
        value={asignaturasId}
        onChangeText={(text)=>setAsignaturasId(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="DNI del alumno"
        value={dni}
        onChangeText={(text)=>setDNI(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => create()}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>


    </View>
  )
}

export default AddMatricula

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    height: 45,
    width: '100%',
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

