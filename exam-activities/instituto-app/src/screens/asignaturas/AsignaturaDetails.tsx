import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL_INSTITUTO } from '../../utils/Utils';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import { AsignaturaContextHook } from '../../context/AsignaturaContext';

type Props = {}


type AsignaturaDetailsType = {
  FindAsignaturaScreen: undefined,
  AsignaturaDetails: undefined,
}

type AsignaturaType = {
  nombre: string,
  curso : string
}


type PropsAsignatura = NativeStackScreenProps<AsignaturaDetailsType, 'AsignaturaDetails'>;

const AsignaturaDetails = (props: Props) => {
  
  const [asignatura, setAsignatura] = useState<AsignaturaType>({} as AsignaturaType)
  const [prevAsignatura, setPrevAsignatura] = useState<AsignaturaType>({} as AsignaturaType)

  const context = useContext(AsignaturaContextHook);
  useEffect(() => {
    setPrevAsignatura({
      nombre: context.nombre,
      curso: context.curso
    })
  }, [])
  

  function fillFormData (value : string, field: keyof AsignaturaType){
    setAsignatura(
        {   
            ...asignatura, 
            [field]: value 
        }
    );
  } 


  const crear = async () => {
      if(!asignatura || asignatura.nombre.trim() === ""  || asignatura.curso.trim() === ""){
          return;
      }

      try {
        const token = await AsyncStorage.getItem("token");
        console.log(asignatura);
        //console.log(foto);
        console.log("URL del API: ", `${URL_INSTITUTO}v3/asignaturas`);

        const nombrePrev = prevAsignatura.nombre;
        const cursoPrev = prevAsignatura.curso;

        const nombre = asignatura.nombre;
        const curso = asignatura.curso;

        const response = await axios.put(`${URL_INSTITUTO}v3/asignaturas/nombre/${nombrePrev}/curso/${cursoPrev}`, {
              nombre,
              curso
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
      <Text style={styles.title}>Crear una nueva asignatura</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre de la asignatura"
        value={asignatura.nombre}
        onChangeText={(text)=>fillFormData(text, 'nombre')}
      />
            
      <TextInput
        style={styles.input}
        placeholder="Curso de la asignatura"
        value={asignatura.curso}
        onChangeText={(text)=>fillFormData(text, 'curso')}
      />

      <TouchableOpacity style={styles.button} onPress={() => crear()}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>


    </View>
  )
}

export default AsignaturaDetails

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

