import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import { URL_INSTITUTO } from '../../utils/Utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MatriculaContextHook } from '../../context/MatriculaContext'
import { Matricula } from '../../data/entities/Matricula'
import { Alumno } from '../../data/entities/Alumno'
import { Asignatura } from '../../data/entities/Asignatura'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type MatriculaDetailsType = {
  FindMatricula: undefined,
  MatriculaDetails: undefined,
}

type PropsMatricula = NativeStackScreenProps<MatriculaDetailsType, 'MatriculaDetails'>;

const MatriculaDetails = (props: PropsMatricula) => {
  
  const [year, setYear] = useState<string>("");
  const [asignaturasId, setAsignaturasId] = useState<string>("");
  const [dni, setDNI] = useState<string>("");

  const context = useContext(MatriculaContextHook);
  useEffect(() => {

  }, [])
  

  const update = async () => {
      if(!asignaturasId || !asignaturasId){
          return;
      }

      try {
        const token = await AsyncStorage.getItem("token");
        console.log(asignaturasId);
        console.log("URL del API: ", `${URL_INSTITUTO}v3/asignaturas`);

        const arr: number[] = asignaturasId.split(",").map(Number);
        console.log(arr); 


        const response = await axios.put(`${URL_INSTITUTO}v3/matriculas/{id}?id=${context.id}`, {
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
        props.navigation.goBack();
    
      } catch (error) {
        console.error("Error al actualziar la asignatura: ", error.response || error.message);
        if (error.response) {
            console.log("Detalles del error: ", error.response.data);
        }
    }
    
  };


    
return (
  <View style={styles.container}>
      <Text style={styles.title}>Matrícula {context.id}</Text>
      
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

      <TouchableOpacity style={styles.button} onPress={() => update()}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>


    </View>
  )
}

export default MatriculaDetails

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

