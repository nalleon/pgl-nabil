import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../../theme/LoginStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { URL_INSTITUTO } from '../../utils/Utils'
import { UserNameContext } from '../../context/UserContext'

type Props = {}

type AlumnoType =  {
  dni : string,
  nombre : string,
  apellidos : string,
  fechanacimiento : string
  foto?: string;
}
const AddAlumnoScreen = (props: Props) => {
    
  const [alumno, setAlumno] = useState<AlumnoType>({} as AlumnoType)
  const [foto, setFoto] = useState<string | null>(null);
  const [nombrefichero,setnombrefichero ] = useState("");
  const [photoBase64, setphotoBase64] = useState("");

  const context = useContext(UserNameContext);
  
  useEffect(() => {
  }, [])
  

  useEffect(() => {
    /**if (logged) {
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'DrawerNav' }],
      });
    }*/
  }, []);



  function fillFormData (value : string, field: keyof AlumnoType){
    setAlumno(
        {   
            ...alumno, 
            [field]: value 
        }
    );
  } 


  const crear = async (alumnoSTR : string, foto : string) => {
      if(!alumnoSTR || alumnoSTR.trim() === ""){
          return;
      }

      try {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        const response = await axios.post(`${URL_INSTITUTO}/v3/alumnos`, {
              alumno: alumnoSTR,
              foto: foto 
          },
          {
            headers:{
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + token,
            }   
          }
      );

      console.log("Respuesta del servidor: ", response.data);
    
      } catch (error) {
        console.error("Error al", error);
      }
  };


    
return (
  <View style={styles.container}>
     
      <Text style={styles.title}>Crear un nuevo alumno</Text>
      
      <TextInput
        style={styles.input}
        placeholder="DNI"
        onChangeText={(text)=>fillFormData(text, 'dni')}
      />
            
      <TextInput
        style={styles.input}
        placeholder="Nombre del alumno"
        onChangeText={(text)=>fillFormData(text, 'nombre')}
      />

            
      <TextInput
        style={styles.input}
        placeholder="Apellidos del alumno"
        onChangeText={(text)=>fillFormData(text, 'apellidos')}
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento"
        onChangeText={(text)=> {
            const [day, month, year] = text.split('-');
            const fecha = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 0, 0, 0);
            const fechaFormateada = fecha.toISOString().slice(0, 19).replace('T', ' ');
            fillFormData(fechaFormateada, 'fechanacimiento');
          }}
                />

      <TouchableOpacity onPress={() => {
   
      }}>
        <Text>Seleccionar Foto</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button} onPress={() => crear(JSON.stringify(alumno), foto)}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>


    </View>
  )
}

export default AddAlumnoScreen

