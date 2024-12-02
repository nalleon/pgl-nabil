import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice08Styles'
import Box08 from '../components/Box08'

type Props = {}

type DataCircle = {
  name: string;
  red : number;
  green : number;
  blue : number;
}
type Direction = "row" | "row-reverse" | "column" | "column-reverse" ;
type WrapType= "wrap" | "no-wrap" | "wrap-reverse";

const Practice08Screen = (props: Props) => {
  const [direction, setDirection] = useState<Direction>("row");
  const [wrap, setWrap] = useState<WrapType>("wrap");
  const [circleArr, setCircleArr] = useState<DataCircle[]>([]);


  function addCircle(){
    const lastCircle = circleArr[circleArr.length - 1] || {
      red: 50,
      green: 70,
      blue: 100,
    };

    setCircleArr([...circleArr, 
      {
        name: 'b'+(circleArr.length+1),
        red: (lastCircle.red + 15) % 256,
        green: (lastCircle.green + 35) % 256,
        blue: (lastCircle.blue + 75) % 256,
      }
    ]);
  }

  const changeWrap = () => {
    const options: WrapType[] = ["wrap", "no-wrap", "wrap-reverse"];
    const nextOptionPos = (options.indexOf(wrap!) + 1) % options.length;
    setWrap(options[nextOptionPos]);
  };

  const changeRow = () => {
    const options: Direction[] = ["row", "column", "row-reverse", "column-reverse"];
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
      <View>
      <View
        style={[
          styles.container,
          {
            flexDirection: direction ?? "row",
            flexWrap: wrap === "no-wrap" ? "nowrap" : wrap ?? "wrap",
          },
        ]}
      >
        {circleArr.map((circle, index) => (
            <Box08 key={index} nameBox={'B'+circleArr.length+1} red={circle.red} green={circle.green} blue={circle.blue}/>
        ))}
        
      </View>
      </View>
    </View>
  )
}

export default Practice08Screen

