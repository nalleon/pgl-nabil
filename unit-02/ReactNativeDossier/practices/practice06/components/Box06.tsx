import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice06Styles';

type Props = {
  color : string;
  
}

const Box06 = (props: Props) => {
  const { color } = props;

  const [flex, setFlex] = useState(0);
  function changeFlexStyle(flexLevel : number) {
    if (flexLevel < 0){
      return;
    }
    setFlex(flexLevel);
  }

  return (
    <View style={{...styles.box, backgroundColor:color, flex:flex}}>
      <TouchableHighlight style={styles.button} onPress={() => changeFlexStyle(flex+1)}>
            <Text onPress={() => changeFlexStyle}></Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => changeFlexStyle(flex-1)}></TouchableHighlight>
      <Text>Flex: {flex}</Text>
    </View>
  )
}



export default Box06

