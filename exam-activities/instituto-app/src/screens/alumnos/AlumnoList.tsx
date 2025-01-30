import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { URL_INSTITUTO } from '../../utils/Utils'
import { FlatList } from 'react-native-gesture-handler'
import { styles } from '../../theme/ListaStyle'

type Props = {}

type AlumnoData = {
    nombre : string,
    apellidos : string,
}
const AlumnoList = (props: Props) => {
    const [data, setData] = useState<AlumnoData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem("token");
            console.log("Token:", token);
            if (!token) {
                console.error("Token no disponible");
                return;
            }

            try {
                const response = await axios.get(`${URL_INSTITUTO}v2/alumnos`, {
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
        fetchData();
        
    }, [])
    return (
        <View>
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

export default AlumnoList

