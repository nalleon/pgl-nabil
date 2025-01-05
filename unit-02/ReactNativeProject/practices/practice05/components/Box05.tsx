import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice05Styles';

type Props = {
  color : string;
  
}

const Box = (props: Props) => {
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
      <Button color={"red"} title='Flex +1' onPress={() => changeFlexStyle(flex+1)}></Button>
      <Button title='Flex -1' onPress={() => changeFlexStyle(flex-1)}></Button>
      <Text>Flex: {flex}</Text>
    </View>
  )
}



export default Box

