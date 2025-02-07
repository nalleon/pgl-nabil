import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cell from '../model/Cell'

type Props = {}

const BoardScreen = (props: Props) => {
  const [cells, setCells] = useState<Cell[][]>([]);
  const [won, setWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    
    createBoard();

  }, [gameOver])


  const createBoard = () => {
    let arr : Cell [][] = [];
    for(let i=0; i<3; i++){
      let row : Cell[] = [];
      for(let j=0; j<3; j++){
        let cell : Cell = new Cell((i*3+j), " ");
        row.push(cell);
      }
      arr.push(row);
    }
    setCells(cells);
    setWon(false);
  }
  
  return (
    <View style={{flex:1}}>
      <Text>BoardScreen</Text>
    
      
    
    </View>
  )
}

export default BoardScreen

const styles = StyleSheet.create({

})