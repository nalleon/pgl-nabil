import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cell from '../components/Cell';

type Props = {}


type CellType = {
  id: number;
  value : valueType;
  positionX : number;
  positionY : number;
  touched : boolean;
}

type valueType = 'x' | 'o' | ' ';

const TresEnRayaScreen = (props: Props) => {
  
  const [board, setboard] = useState<CellType[][]>([]);

  const boardSize = 3;

  let numTouches = 3;
  let computerNumTouches = 3;


  useEffect(() => {
  }, [])
  

  function createBoard(){
    let auxId= 1;
    let auxArr : CellType [][]= []
    for (let i = 0; i < boardSize; i++){
      for(let j = 0; j < board.length; j++){
        let auxCell : CellType = {
          id: auxId,
          value: ' ',
          positionX: i,
          positionY:j,
          touched: false
        }

        auxArr[i][j]= auxCell;

        auxId++;
      }
    }
    setboard(auxArr);
  }


  function checkPosition(cell : CellType){
    if (cell.touched && cell.value !== ' '){
      return;
    }

    const positionsToCheck = [
      { x: 1, y: 0 },  
      { x: -1, y: 0 }, 
      { x: 0, y: 1 }, 
      { x: 0, y: -1 }, 
      { x: -1, y: 1 }, 
      { x: 1, y: -1 }, 
      { x: -1, y: -1 },
      { x: 1, y: 1 }   
    ];

  
    const posX = cell.positionX;
    const posY = cell.positionY;

  
    for (const { x, y } of positionsToCheck) {
      const newX = posX + x;
      const newY = posY + y;

      if(board[newX][newY].value === 'x'){
        
      }
      
    }

  }

  function modifyCell(posX : number, posY: number){
    let cellToUpdate : CellType = board[posX][posY];

    if(cellToUpdate.value === ' '){ 
      cellToUpdate.value = 'o';
      cellToUpdate.touched = true;
      numTouches--;
      computerActions();
      return;
    } 



  }


  function computerActions(){
    let rndX = 0;
    let rndY = 0;

    while(board[rndX][rndY].value !== ' '){
      rndX = Math.trunc(Math.random() * boardSize);
      rndY = Math.trunc(Math.random() * boardSize);
    }

    board[rndX][rndY].value = 'x';
    computerNumTouches--;
  }








  return (
    <View style={styles.container}>
        <Text>Tres en Raya</Text>
        <TouchableOpacity style={styles.btn} onPress={createBoard}>
          <Text style={{textAlign:'center'}}>Start Game</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.row}>
            <View>
              <Cell id={1} value={' '} positionX={0} positionY={0} touched={false} modifyCell={()=> modifyCell}/>
            </View>
            <View>
              <Cell id={2} value={' '} positionX={1} positionY={0} touched={false} modifyCell={()=> modifyCell}/>
            </View>
            <View>
              <Cell id={3} value={' '} positionX={2} positionY={0} touched={false} modifyCell={()=> modifyCell}/>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Cell id={4} value={' '} positionX={1} positionY={1} touched={false} modifyCell={()=> modifyCell}/>
            </View>
            <View>
              <Cell id={5} value={' '} positionX={2} positionY={1} touched={false} modifyCell={()=> modifyCell}/>
            </View>
            <View>
            < Cell id={6} value={' '} positionX={3} positionY={1} touched={false} modifyCell={()=> modifyCell}/>
            </View>
          </View>
          <View style={styles.row}>
            <View>
            <Cell id={7} value={' '} positionX={1} positionY={2} touched={false} modifyCell={()=> modifyCell}/>
            </View>
            <View>
            <Cell id={8} value={' '} positionX={3} positionY={2} touched={false} modifyCell={()=> modifyCell}/>
            </View>
            <View>
            <Cell id={9} value={' '} positionX={2} positionY={2} touched={false} modifyCell={()=> modifyCell}/>
            </View>
          </View>
        </View>
            {/* {board.map((row, index) => (
              <View key={index}>
                { row.map((cell) => (
                      <Cell cell={cell}/>  
                  ))  
                  }
                  
                </View>
            
              )
            )
            } */}
    </View>
  )
}

export default TresEnRayaScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'lightblue',
    justifyContent:'center',
    alignItems:'center'
  },

  btn: {
    backgroundColor: 'red',
    textAlign: 'center'
  },
  row:{
    flexDirection:'row', 
    columnGap:'1',
  }
})