import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice08Styles'
import Box08 from '../components/Box08'

type Props = {}

/**
 * Type definition for the data structure representing a circle
 */
type DataCircle = {
  name: string;
  red : number;
  green : number;
  blue : number;
}

/**
 *  Type definition for the flex directions values 
 */

type DirectionType = "row" | "row-reverse" | "column" | "column-reverse";

/**
 *  Type definition for the wrap values 
 */
type WrapType= "wrap" | "no-wrap" | "wrap-reverse";

const Practice08Screen = (props: Props) => {

  /**
   * UseStates
   */
  const [direction, setDirection] = useState<DirectionType>("row");
  const [wrap, setWrap] = useState<WrapType>("wrap");
  const [circleArr, setCircleArr] = useState<DataCircle[]>([]);


  /**
   * Function to add a circle to the array of circles
   */
  function addCircle(){
    const lastCircle = circleArr[circleArr.length - 1] || {
      red: 50,
      green: 70,
      blue: 100,
    };

    setCircleArr([...circleArr, 
      {
        name: 'B'+(circleArr.length+1),
        red: (lastCircle.red + 25) % 256,
        green: (lastCircle.green + 35) % 256,
        blue: (lastCircle.blue + 55) % 256,
      }
    ]);
  }

  /**
   * Function to change the wrap property of the container
   */
  const changeWrap = () => {
    const options: WrapType[] = ["wrap", "no-wrap", "wrap-reverse"];
    const nextOptionPos = (options.indexOf(wrap!) + 1) % options.length;
    setWrap(options[nextOptionPos]);
  };

  
  /**
   * Function to change the flex direction property of the container
   */
  const changeRow = () => {
    const options: DirectionType[] = ["row", "column", "row-reverse", "column-reverse"];
    const nextOptionPos = (options.indexOf(direction!) + 1) % options.length;
    setDirection(options[nextOptionPos]);
  };

  return (
    <View style={styles.mainContainer}>
      

      <Button title='Add circle' onPress={addCircle}/>
      <TouchableOpacity onPress={()=> changeWrap()}> 
        <Text style={styles.btnwrap}>Change Wrap (Click here)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> changeRow()}> 
        <Text style={styles.btnrow}>Change Row (Click here)</Text>
      </TouchableOpacity>
 
      <View
        style={{...styles.container,
                  flexDirection: direction ?? "row",
                  flexWrap: wrap === "no-wrap" ? "nowrap" : wrap ?? "wrap",
        }}
      >
        {circleArr.map((circle, index) => (
            <Box08 key={index} nameBox={circle.name} red={circle.red} green={circle.green} blue={circle.blue}/>
        ))}
        
      </View>

    </View>
  )
}

export default Practice08Screen

