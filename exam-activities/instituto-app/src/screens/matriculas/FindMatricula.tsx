import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, RefreshControl, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Matricula } from '../../data/entities/Matricula';
import { MatriculaContextHook } from '../../context/MatriculaContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL_INSTITUTO } from '../../utils/Utils';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {}

type MatriculaDetailsType = {
  FindMatricula: undefined,
  MatriculaDetails: undefined,
}

type PropsMatricula = NativeStackScreenProps<MatriculaDetailsType, 'FindMatricula'>;

const FindMatricula = (props: PropsMatricula) => {
  const [data, setData] = useState<Matricula>({} as Matricula);
  const [refresh, setRefresh] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  
  const [busqueda, setBusqueda] = useState<string>("");

  const context = useContext(MatriculaContextHook);

  useEffect(() => {
    console.log("Datos actualizados:", data);
  }, [data])
 

  function refreshData() {
    setRefresh(!refresh);
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }

  const fetchData = async (id : string) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
        console.error("Token no disponible");
        return;
    }

    try {
        const response = await axios.get(`${URL_INSTITUTO}v3/matriculas/{id}?id=${id}`, {
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

  function handleScreen(id : number){
    if(id){
      context.setId(id);
      props?.navigation?.navigate('MatriculaDetails');
    } 
  }



  return (
    <View style={{...styles.container, flexDirection:'column'}}>
      <TextInput
        style={styles.input}
        placeholder="Id de la matricula"
        onChangeText={(text) => setBusqueda(text)}
      />
    
      <TouchableOpacity style={styles.button} onPress={() => fetchData(busqueda)}>
        <Text style={styles.buttonText}> Buscar </Text>
      </TouchableOpacity>

      { data &&
          <View style={styles.task} >
              <Text style={styles.taskText}>{data?.alumno?.nombre} {data?.alumno?.apellidos} -- {data?.year}</Text>
              <View style={styles.taskActions}>
                  <TouchableOpacity onPress={() => handleScreen(data?.id)} style={styles.taskActionIcon}>
                      <Icon name='close' size={35} color={'#d1234e'} />
                  </TouchableOpacity>
              </View>
          </View>
      }
    
    </View>
  )
}

export default FindMatricula

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },

  btnText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  task: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#008080",
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3, 
    marginTop: 20
  },

  taskText: {
    fontSize: 17,
    flex: 1,
    marginLeft: 25,
    color: '#333',
  },

  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskActionIcon: {
    marginLeft: 15,
    padding: 5,
    borderRadius: 5,
  },

  taskContent: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#008080',
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#008080",
  },
  button: {
    width: "100%",
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
