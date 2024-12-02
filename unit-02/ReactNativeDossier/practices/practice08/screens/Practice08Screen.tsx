import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Box05 from '../components/Box08'
import styles from '../themes/Practice08Styles'
import BoxContainer08 from '../components/BoxContainer08'
import Practice02 from '../../practice02/components/Practice02';
import Box08 from '../components/Box08'

type Props = {}

type DataCircle = {
  name: string;
  red : number;
  green : number;
  blue : number;
}
type Direction = "row" | "row-reverse" | "column" | "column-reverse" | undefined;
type WrapType= "wrap" | "no-wrap" | "wrap-reverse" | undefined;
const Practice08Screen = (props: Props) => {
  const [direction, setDirection] = useState<Direction>("row");
  const [wrap, setWrap] = useState<WrapType>("wrap");
  const [circleArr, setCircleArr] = useState<DataCircle[]>([]);

  const [maxRGB, setMaxRGB] = useState<number>(256);

  function addCircle(){
    setCircleArr([...circleArr, 
      {
        name: 'b'+(circleArr.length+1),
        red: Math.floor(Math.random() * 256)-(maxRGB/2),
        green: Math.floor(Math.random() * 256)-(maxRGB/3),
        blue: Math.floor(Math.random() * 256)-(maxRGB/4)
      }
    ]);
  }

  function changeWrap(){

  }

  function changeRow(){

  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={()=> addCircle()}> 
        <Text style={styles.btncircle}>Add circle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> changeWrap()}> 
        <Text style={styles.btnwrap}>Change Wrap (Click here)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> changeRow()}> 
        <Text style={styles.btnrow}>Change Row (Click here)</Text>
      </TouchableOpacity>
      <View>
        {
          
          circleArr.map((box, index) =>(
              <Box08 key={index} nameBox={box.name} red={box.red} green={box.green} blue={box.blue}/>
          ))

        }  
      </View>
    </View>
  )
}

export default Practice08Screen

