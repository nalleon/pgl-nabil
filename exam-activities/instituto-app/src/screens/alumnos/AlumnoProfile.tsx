import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AlumnoContextHook } from '../../context/AlumnoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_INSTITUTO } from '../../utils/Utils';

type Props = {}

type AlumnoData = {
    dni : string,
    nombre : string,
    apellidos : string
}

type AlumnoDetails = {
  FindAlumno: undefined,
  AlumnoProfile: undefined,
}

type PropsAlumno = NativeStackScreenProps<AlumnoDetails, 'AlumnoProfile'>;

const AlumnoProfile = (props: PropsAlumno) => {
    const [data, setData] = useState<AlumnoData>({} as AlumnoData);
    const context = useContext(AlumnoContextHook);

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
    

    return (
        <View>
            <Text>Datos:</Text>
            {data ? (
                <>
                    <Text>DNI: {data.dni}</Text>
                    <Text>Nombre: {data.nombre}</Text>
                    <Text>Apellidos: {data.apellidos}</Text>
                </>
            ) : (
                <Text>Permiso denegado</Text>
            )}
        </View>
    )
}

export default AlumnoProfile

const styles = StyleSheet.create({})