import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AlumnoContextHook } from '../../context/AlumnoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_INSTITUTO } from '../../utils/Utils';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';

type Props = {}

type AlumnoData = {
    dni : string,
    nombre : string,
    apellidos : string,
    fechanacimiento: Date;
}

type AlumnoDetails = {
  FindAlumno: undefined,
  AlumnoProfile: undefined,
}

type PropsAlumno = NativeStackScreenProps<AlumnoDetails, 'AlumnoProfile'>;

const AlumnoProfile = (props: PropsAlumno) => {
    /**
     * UseStates
     */
    const [data, setData] = useState<AlumnoData>({} as AlumnoData);
    const [foto, setFoto] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    /**
     * Contexto
     */
    const context =useContext(AlumnoContextHook);


    useEffect(() => {
        if(!context.dni){
          return;
        }

        const fetchData = async () => {
          console.log("DNI:", context.dni);

          const token = await AsyncStorage.getItem("token");
          console.log("Token:", token);
          if (!token) {
              console.error("Token no disponible");
              return;
          }

          console.log(`${URL_INSTITUTO}v3/alumnos/${context.dni}`);
          try {
              const response = await axios.get(`${URL_INSTITUTO}v3/alumnos/${context.dni}`, {
                  headers: {
                      Authorization: 'Bearer ' + token,
                  },
              });
              console.log("Respuesta del servidor:", response.data); 
              let alumnoData = response.data.data;
              setData(alumnoData); 
              console.log(data);
          } catch (error) {
              console.error("Error al obtener los datos:", error);
          }
      };

      fetchData();
    }, [])
    

    const selectImage = async () => {
        launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) => {
          if (response.didCancel) {
            console.log('Selección de foto cancelada');
          } else if (response.errorCode) {
            console.log('ERROR: ' + response.errorMessage);
          } else {
            const imageData = response.assets[0];
            const mimeType = imageData.type;
            setFoto(`data:${mimeType};base64,${imageData.base64}`);
          }
        });
      };

    function fillFormData(value: string | Date, field: keyof AlumnoData) {
        setData({
            ...data,
            [field]: value,
        });
    }

    const actualizar = async () => {
        fillFormData(context.dni, 'dni');
        const alumnoSTR: string = JSON.stringify(data);
        if (!alumnoSTR || alumnoSTR.trim() === '') {
          return;
        }
    
        try {
          const token = await AsyncStorage.getItem('token');
          console.log(token);
          console.log('URL del API: ', `${URL_INSTITUTO}v3/alumnos/${data.dni}`);
    
          console.log(alumnoSTR);
          const response = await axios.put(
            `${URL_INSTITUTO}v3/alumnos/${data.dni}`,
            {
              alumno: alumnoSTR,
              foto: foto || null,
            },
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + token,
              },
            }
          );
    
        
          console.log('Respuesta del servidor: ', response.data);
          props.navigation.goBack();
        } catch (error) {
          console.error('Error al actualizar alumno: ', error.response || error.message);
          if (error.response) {
            console.log('Detalles del error: ', error.response.data);
          }
        }

      };    




      return (
        <View style={styles.container}>
          <Text style={styles.title}>Alumno: {data.dni}</Text>
    
          <TextInput
            style={styles.input}
            placeholder="Nombre del alumno"
            value={data.nombre}
            onChangeText={(text) => fillFormData(text, 'nombre')}
          />
    
          <TextInput
            style={styles.input}
            placeholder="Apellidos del alumno"
            value={data.apellidos}
            onChangeText={(text) => fillFormData(text, 'apellidos')}
          />
    
          <DatePicker
            modal
            open={open}
            date={data.fechanacimiento ?? new Date()}
            mode="date"
            onConfirm={(date) => {
              fillFormData(date, 'fechanacimiento');
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
    
          <View style={{ flexDirection: 'row', paddingHorizontal: 50 }}>
            <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
              <Text style={styles.buttonText}>Fecha de nacimiento</Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              style={{ ...styles.button, width: 50, borderRadius: 200, marginLeft: 5 }}
              onPress={() => selectImage()}
            >
              <Icon name={'image'} size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
    
          <TouchableOpacity style={styles.button} onPress={() => actualizar()}>
            <Text style={styles.buttonText}>Actualizar</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
export default AlumnoProfile


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