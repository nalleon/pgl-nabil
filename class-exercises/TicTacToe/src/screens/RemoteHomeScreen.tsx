import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './InitScreen';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { GameLocalEntity } from '../data/entity/GameLocalEntity';
import { AppContext } from '../context/AppContext';
import { URL_API } from '../utils/Utils';
import axios from 'axios';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'RemoteHomeScreen'>;

const RemoteHomeScreen = (props: AuthProps) => {
  const [data, setData] = useState<GameLocalEntity[]>([]);
  
  const context = useContext(AppContext);

  const handleContinueGame = (id: number) => {
      console.log(id);
      context.setCurrentLocalGameId(id);
      props.navigation.navigate('PlayLocalScreen');
  }


  const handleGame = async () => {
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
            const gameId = response.data.message.slice(-2);
            console.log("ID de la partida:", gameId);
            context.setOnlineGameId(gameId)

            props.navigation.navigate('PlayRemoteScreen');

          } catch(error){
              console.error("Error al guardar el token: "+  error);
          } 
          
      }
      } catch (error) {
          console.error("Error al iniciar sesión", error);
  }
  }



  const handleGoBack = () => {
    if (context) {
      context.setToken("");
      context.setUsername("");
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