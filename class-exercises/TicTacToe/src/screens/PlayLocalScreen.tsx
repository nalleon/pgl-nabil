import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cell from '../model/Cell';

type Props = {}

const PlayLocalScreen = (props: Props) => {
    const [cells, setCells] = useState<Cell[][]>([]);
    const [won, setWon] = useState(false);
    const [gameOver, setGameOver] = useState(false);
  
    const [numTouched, setNumTouched] = useState<number>(0);
    const [numTouchedComputer, setNumTouchedComputer] = useState<number>(0);
  
    const minTouched = 3;
  
    useEffect(() => {
      setWon(false);
      setNumTouched(0);
      setNumTouchedComputer(0);
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
      setCells(arr);
      setWon(false);
    }
  
  
    const play = (rowIndex : number, cellIndex : number) => {
      if(cells[rowIndex][cellIndex].getValue() != " " || gameOver==true || won==true){
        return;
      }
  
      cells[rowIndex][cellIndex].putValueInCell("x");
      setNumTouched(numTouched+1)
      refreshCells();
  
      if(numTouched >= minTouched){
        const isLine : boolean = hasLine(rowIndex, cellIndex);
        if(isLine){
          setWon(true);
        }
      }
  
      if(checkCells() && !won){
        computerPlay();
      }
      
  
    }
  
    const refreshCells = () => {
      let array: Cell[][] = [];
      for (let i = 0; i < 3; i++) {
        let row: Cell[] = []
        for (let j = 0; j < 3; j++) {
          let cell: Cell = new Cell((i * 3 + j), cells[i][j].getValue());
          row.push(cell);
        }
        array.push(row);
      }
      setCells(array);
    }
  
  
    const computerPlay = () => {
      let index1 = Math.trunc(Math.random() * 3);
      let index2 = Math.trunc(Math.random() * 3);
  
      while (cells[index1][index2].getValue() != " ") {
        index1 = Math.trunc(Math.random() * 3);
        index2 = Math.trunc(Math.random() * 3);
      }
  
      cells[index1][index2].putValueInCell("o");
      refreshCells();
      setNumTouchedComputer(numTouchedComputer+1)
  
      if(numTouchedComputer >= minTouched){
        const isLineComputer : boolean = hasLine(index1, index2);
  
        if(isLineComputer){
          setWon(true);
        }
      }
  
  
    }
  
    const checkCells = () => {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (cells[i][j].getValue() == " ") {
            return true;
          }
        }
      }
      return false;
    }
  
    const checkHorizontal = (i:number, j:number, value : string) => {
      switch(i){
        case 0:
          if(cells[i][j].getValue() == value && cells[i+1][j].getValue() == value && cells[i+2][j].getValue() == value){
            return true;
          }
          return false;
        case 1:
          if(cells[i][j].getValue() == value && cells[i+1][j].getValue() == value && cells[i-1][j].getValue() == value){
            return true;
          }
          return false;
        case 2:
          if(cells[i][j].getValue() == value && cells[i-1][j].getValue() == value && cells[i-2][j].getValue() == value){
            return true;
          }
          return false;
      }
    }
  
    const checkVertical = (i:number, j:number, value : string) => {
      switch (j){
        case 0:
          if(cells[i][j].getValue() == value && cells[i][j+1].getValue() == value && cells[i][j+2].getValue() == value){
            return true;
          }
          return false;
        case 1:
          if(cells[i][j].getValue() == value && cells[i][j+1].getValue() == value && cells[i][j-1].getValue() == value){
            return true;
          }
          return false;
        case 2:
          if(cells[i][j].getValue() == value && cells[i][j-1].getValue() == value && cells[i][j-2].getValue() == value){
            return true;
          }
          return false;
      }
    }
  
    const checkDiagonal = (value : string) => {
      if(cells[0][0].getValue() == value && cells[1][1].getValue() == value && cells[2][2].getValue() == value){
        return true;
      } else if(cells[2][0].getValue() == value && cells[1][1].getValue() == value && cells[0][2].getValue() == value){
        return true;
      }
    }
  
    const hasLine = (i:number, j:number) => {
        const value  = cells[i][j].getValue();
  
        if(value == " "){
          return false;
        }
  
        if(checkHorizontal(i,j,value)){
          return true;
        }
  
        if(checkVertical(i,j,value)){
          return true;
        }
        
        if(checkDiagonal(value)){
          return true;
        }
        
      
        return false;
    }
  
  
  const restart = () => {
    setGameOver(false);
  
  }
  
    
    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          {
            cells.map((row, rowIndex) =>
              <View style={styles.row} key={rowIndex}>
                {row.map((cell, cellIndex) =>
                    <View style={styles.cell} key={rowIndex + "_" + cellIndex}>
                      <TouchableOpacity onPress={() => play(rowIndex, cellIndex)}>
                        <Text style={styles.text}>{cell.getValue()}</Text>
                      </TouchableOpacity>
                    </View>
                )}
              </View>
            )}
          </View>
          <View>
            <TouchableOpacity onPress={() => setGameOver(!gameOver)}>
              <Text style={{ borderColor: "black", borderWidth: 1, textAlign: 'center' }}>Restart</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
  
  export default PlayLocalScreen
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  
    cell: {
      flex: 1,
      borderWidth: 1,
      borderBlockColor: "#008080",
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
      fontSize: 20,
      textAlign: "center"
    }
  })
