import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import UseGameLogic from '../hooks/UseGameLogic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { GameLocalEntity } from '../data/entity/GameLocalEntity';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { POLLING_INTERVAL, URL_API } from '../utils/Utils';
import Cell from '../model/Cell';
import { FlatList } from 'react-native-gesture-handler';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LocalHomeScreen'>;

export type GameOutput = {
  player1: string;
  player2: string;
  board: string[][];
  finished: boolean;
};

export type GamePlay = {
  playername: string;
  posX: number;
  posY: number;
};


const PlayRemoteScreen = (props: AuthProps) => {
  const [game, setGame] = useState<GameOutput>({} as GameOutput);
  const [cells, setCells] = useState<string[][]>([])
  const context = useContext(AppContext);
  const pollingInterval = useRef<NodeJS.Timeout | null>(null); 

  useEffect(() => {
    pullStuff(context.onlineGameId);
  }, [])


  useEffect(() => {
    let boardAux: string[][] = [];


  }, [])
  

    const fetchData = async (gameId:number) => {
    try {
      const response = await axios.get(`${URL_API}/v2/games/${gameId}`, {
        params: { name: context.username },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.token}`,
        },
      });
  
    let status = response.data.status;
    if (status == 200){
      console.log("OK")
      setGame(response.data.data);
      console.log(response.data.data)
      console.log("BOARD: " + game?.board[0][1]);

    }

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

  const handlePressAbandon = async () => {
    context.setCurrentLocalGameId(-1);
    props.navigation.navigate('RemoteHomeScreen');
  }

  const handlePlay = async () => {

  }

  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        { game && 
          <FlatList
          data={game?.board}
          renderItem={({item: row, index: posX}) => (
            <View style={styles.row}>
            <FlatList
              data={row}
              numColumns={3}
              renderItem={({item: column, index: posY}) => (
                  <TouchableOpacity style={styles.cell} onPress={() => handlePlay()}>
                    <Text style={styles.text}>{column}</Text>
                  </TouchableOpacity>
                )
              }
            />
            </View>
          )

          }
        />
        }
      </View>

        <View style={{justifyContent:'flex-end', alignItems: 'center', marginBottom: 70,  flex:1}}>
            <TouchableOpacity style={styles.button} onPress={() => handlePressAbandon()}>
              <Text style={styles.buttonText}>Abandon</Text>
            </TouchableOpacity>
          
        </View>
    </View>
  )
}

export default PlayRemoteScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },

  cell: {
    flex: 1,
    borderWidth: 1,
    width: 50,
    height: 100,
    borderColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: 300
  },

  text: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: 'courier'
  },
    button: {
    width: "80%",
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    margin:10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})