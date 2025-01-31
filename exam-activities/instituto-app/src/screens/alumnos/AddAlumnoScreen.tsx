import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../../theme/LoginStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { URL_INSTITUTO } from '../../utils/Utils'
import { UserNameContext } from '../../context/UserContext'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
type Props = {}

type AlumnoType =  {
  dni : string,
  nombre : string,
  apellidos : string,
  fechanacimiento : Date
  foto?: string;
}

//fechanacimento debe de ser un string

const AddAlumnoScreen = (props: Props) => {
    
  const [alumno, setAlumno] = useState<AlumnoType>({} as AlumnoType)
  const [foto, setFoto] = useState<String | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [fecha, setFecha] = useState<Date>(new Date());

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

  const selectImage = async () => {
    launchImageLibrary({ mediaType: "photo", includeBase64: true}, (response) => {
      if(response.didCancel){
        console.log("Selección de foto cancelada");
      } else if (response.errorCode){
        console.log("ERROR: " + response.errorMessage);
      } else {
        const imageData = response.assets[0];
        const mimeType = imageData.type;
        setFoto(`data:${mimeType};base64,${imageData.base64}`)
      }
      
    })
  }

  function fillFormData (value : string|Date, field: keyof AlumnoType){
    setAlumno(
        {   
            ...alumno, 
            [field]: value 
        }
    );
  } 


  const crear = async () => {
      const alumnoSTR : string = JSON.stringify(alumno);
      if(!alumnoSTR || alumnoSTR.trim() === ""){
          return;
      }

      try {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        console.log("URL del API: ", `${URL_INSTITUTO}v3/alumnos`);

        console.log(alumnoSTR );
        const response = await axios.post(`${URL_INSTITUTO}v3/alumnos`, {
              alumno: alumnoSTR,
              foto: foto || null
          },
          {
            headers:{
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + token,
            }   
          }
      );

      console.log(response);

      console.log("Respuesta del servidor: ", response.data);
    
      } catch (error) {
        console.error("Error al crear alumno: ", error.response || error.message);
        if (error.response) {
            console.log("Detalles del error: ", error.response.data);
        }
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

      <DatePicker
        modal
        open={open}
        date={alumno.fechanacimiento?? new Date()}
        mode='date'
        onConfirm={(date)=> {
          fillFormData(date, 'fechanacimiento')
        }}
        onCancel={()=>{
          console.log('Cancel');
          setOpen(false);
        }}
      />

      <TouchableOpacity style={styles.button} onPress={() => {
        setOpen(true);
      }}>
        <Text style={styles.buttonText}>Fecha de nacimiento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        selectImage();
      }}>
        <Text style={styles.buttonText}>Seleccionar Foto</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button} onPress={() => crear()}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>


    </View>
  )
}

export default AddAlumnoScreen

