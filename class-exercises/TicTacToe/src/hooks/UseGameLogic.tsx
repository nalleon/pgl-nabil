import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Cell from '../model/Cell';


const UseGameLogic = () => {
    const [cells, setCells] = useState<Cell[][]>([]);
    const [won, setWon] = useState(false);
    const [gameOver, setGameOver] = useState(false);
  

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
      setCells([...arr]);
      setWon(false);
    }
  
  
    const play = (rowIndex : number, cellIndex : number) => {
      if(cells[rowIndex][cellIndex].getValue() != " " || gameOver || won){
        return;
      }
      let wonLocal = false;
      let aux : Cell[][] = cells;
      aux[rowIndex][cellIndex].putValueInCell("x");
      setCells([...aux]);
  
      if(hasLine(aux, rowIndex, cellIndex)){
        setWon(true);
        wonLocal = true;
        setGameOver(true);
      }
      
  
      if(checkCells() && !wonLocal){
        computerPlay();
      }
      
  
    }
  
    const computerPlay = () => {
      let index1 = Math.trunc(Math.random() * 3);
      let index2 = Math.trunc(Math.random() * 3);
  
      while (cells[index1][index2].getValue() != " ") {
        index1 = Math.trunc(Math.random() * 3);
        index2 = Math.trunc(Math.random() * 3);
      }
  
      
        let aux : Cell[][] = cells;
        aux[index1][index2].putValueInCell("o");
        setCells([...aux]);
        const isLineComputer : boolean = hasLine(aux,index1, index2);
  
        if(isLineComputer){
          setWon(true);
          setGameOver(true);
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
      if(won || gameOver){
        return true;
      }
      
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
      if(won || gameOver){
        return true;
      }
      
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
      if(won || gameOver){
        return true;
      }
  
    if(
        cells[0][0].getValue() == value &&
        cells[1][1].getValue() == value && 
        cells[2][2].getValue() == value){
        console.log("diagonal1");
        return true;
    } else if(
        cells[2][0].getValue() == value &&
        cells[1][1].getValue() == value && 
        cells[0][2].getValue() == value){
            console.log("diagonal2")
        return true;
    }
        return false;
    }
  
    const hasLine = (cells : Cell[][], i:number, j:number) => {
        const value  = cells[i][j].getValue();
  
        if(value == " "){
            return false;
        }
  
        if(checkDiagonal(value)){
            return true;
        }
  
        if(checkHorizontal(i,j,value)){
            return true;
        }
  
        if(checkVertical(i,j,value)){
            return true;
        }
        
        return false;
    }

    const restart = () => {
        setGameOver(false);
        createBoard();
        console.log(won, gameOver)
    }

    return {
        restart,
        createBoard,
        play, cells, setCells
    }

}

export default UseGameLogic

const styles = StyleSheet.create({})