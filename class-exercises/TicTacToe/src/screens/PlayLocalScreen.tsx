import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cell from '../model/Cell'
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import UseGameLogic from '../hooks/UseGameLogic';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LocalHomeScreen'>;


const BoardScreen = (props: AuthProps) => {


  const { restart, createBoard, play, cells } = UseGameLogic();

  useEffect(() => {
    createBoard();
  }, [])

  
  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        {
          cells.map((row, rowIndex) =>
            <View style={styles.row} key={rowIndex}>
              {row.map((cell, cellIndex) =>
                  <TouchableOpacity onPress={() => play(rowIndex, cellIndex)} style={styles.cell} key={rowIndex + "_" + cellIndex}>
                      <Text style={styles.text}>{cell.getValue()}</Text>
                  </TouchableOpacity>
              )}
            </View>
        )}
        </View>
        <View style={{justifyContent:'flex-end', alignItems: 'center', marginBottom: 70,  flex:1}}>
          <TouchableOpacity style={styles.button} onPress={() => restart()}>
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('LocalHomeScreen')}>
            <Text style={styles.buttonText}>Go to home</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default BoardScreen

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