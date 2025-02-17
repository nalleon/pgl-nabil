import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import UseGameLogic from '../hooks/UseGameLogic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { GameLocalEntity } from '../data/entity/GameLocalEntity';
import { AppContext } from '../context/AppContext';

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
  const [cells, setCells] = useState<string[][]>([])
  const context = useContext(AppContext);

  useEffect(() => {

  }, [])


  

  
    const handlePress = async () => {
      context.setCurrentLocalGameId(-1);
      props.navigation.navigate('RemoteHomeScreen');
    }

  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        {
          cells.map((row, rowIndex) =>
            <View style={styles.row} key={rowIndex}>
              {row.map((cell, cellIndex) =>
                  <TouchableOpacity style={styles.cell} key={rowIndex + "_" + cellIndex}>
                      <Text style={styles.text}>{cell.charAt(cellIndex)}</Text>
                  </TouchableOpacity>
              )}
            </View>
        )}
      </View>

        <View style={{justifyContent:'flex-end', alignItems: 'center', marginBottom: 70,  flex:1}}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
              <Text style={styles.buttonText}>Abandon</Text>
            </TouchableOpacity>
          
        </View>
    </View>
  )
}

export default PlayRemoteScreen

const styles = StyleSheet.create({
  container: {
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