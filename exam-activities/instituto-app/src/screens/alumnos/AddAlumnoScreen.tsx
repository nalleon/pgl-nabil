import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { URL_INSTITUTO } from '../../utils/Utils'
import { UserNameContext } from '../../context/UserContext'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
type Props = {}

type AlumnoType =  {
  dni : string,
  nombre : string,
  apellidos : string,
  fechanacimiento : Date
}

const AddAlumnoScreen = (props: Props) => {
    
  const [alumno, setAlumno] = useState<AlumnoType>({} as AlumnoType)
  const [foto, setFoto] = useState<String | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [fecha, setFecha] = useState<Date>(new Date());

  const context = useContext(UserNameContext);
  
  useEffect(() => {
  }, [])
  

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
        //console.log(foto);
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

      <View style={{flexDirection:'row', paddingHorizontal:50}}>
        <TouchableOpacity style={styles.button} onPress={() => {
          setOpen(true);
        }}>
          <Text style={styles.buttonText}>Fecha de nacimiento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.button, width:50, borderRadius:200, marginLeft:5}} onPress={() => {
          selectImage();
        }}>
        <Icon name={'image'} size={30} color={'#fff'}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => crear()}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>


    </View>
  )
}

export default AddAlumnoScreen

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
