import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { styles } from './InitScreen';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { GameLocalEntity } from '../data/entity/GameLocalEntity';
import { AppContext } from '../context/AppContext';
import { POLLING_INTERVAL, URL_API } from '../utils/Utils';
import axios from 'axios';
import { GameOutput } from './PlayRemoteScreen';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'RemoteHomeScreen'>;

const RemoteHomeScreen = (props: AuthProps) => {
  const [data, setData] = useState<GameOutput|null>(null);
  const [found, setFound] = useState<boolean>(false)
  const pollingInterval = useRef<NodeJS.Timeout | null>(null); 

  const context = useContext(AppContext);

  

  const handleGame = async () => {
    if(context.onlineGameId != -1){
      return;
    }

    try {
      const response = await axios.post(`${URL_API}/v2/games`, {
              name: context.username,
          },
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + context.token
            }   
          }
      );

      console.log("Respuesta del servidor: ", response.data.message);

     
      
      if (response.data) {
          try {
            const gameId: number = parseInt(response.data.message.slice(-2).trim());
            console.log("ID de la partida:", gameId);
            context.setOnlineGameId(gameId)
            await pullStuff(gameId);
          } catch(error){
              console.error("Error al guardar el token: "+  error);
          } 
        
      }
      } catch (error) {
          console.error("Error al iniciar sesión", error);
      }
    
  }

  const fetchData = async (gameId:number) => {
    try {
      const response = await axios.get(`${URL_API}/v2/games/${gameId}`, {
        params: { name: context.username },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.token}`,
        },
      });
  
    setData(response.data.data as GameOutput);
    let status = response.data.status;
    if (status == 200){
      console.log("Found player")
      setFound(true);
      if (pollingInterval.current) {
        props.navigation.navigate("PlayRemoteScreen");
      }
    }
    console.log("Respuesta completa del servidor: " + JSON.stringify(response.data.message));

  } catch (error) {
    console.log("Error al obtener datos:", error);
  }
}

  const pullStuff = async (gameId: number) => {
    pollingInterval.current = setInterval(() => {
      fetchData(gameId);
    }, POLLING_INTERVAL);

    return () => {
      if (pollingInterval.current) {
        clearInterval(pollingInterval.current);
      }
    }
  }

  const handleGoBack = () => {
    if (context) {
      context.setToken("");
      context.setUsername("");
      context.setOnlineGameId(-1);
      props.navigation.navigate('InitScreen');
    } 
  }
  return (
    <View style={styles.container}>
      <Icon name={'game-controller'} color={'#008080'} size={100} style={{marginTop:20, borderColor: '#008080', borderWidth:3, borderRadius: 100, padding:5}}/>
      <Text style={styles.title}> GAMES </Text>

      <TouchableOpacity style={styles.button} onPress={() => handleGame()}>
          <Text style={styles.buttonText}>Create or join a game</Text>
      </TouchableOpacity>

      <View style={{justifyContent:'flex-end', flex:2}}>
        <TouchableOpacity style={styles.button} onPress={() => handleGoBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default RemoteHomeScreen