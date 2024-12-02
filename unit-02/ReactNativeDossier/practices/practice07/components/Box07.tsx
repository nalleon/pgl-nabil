import { Alert, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice07Styles';

type Props = {
  nameBox : string;
  stylesBox : any;
}

const Box07 = (props: Props) => {
  const { nameBox, stylesBox: styleBox } = props;

  const [flex, setFlex] = useState(0);
  function changeFlexStyle(flexLevel : number) {
    if (flexLevel < 0){
      return;
    }

    setFlex(flexLevel);
    Alert.alert('changed flex to: ' + flexLevel);
  }

  return (
    <View style={{...styles.box, ...styleBox, flex:flex}}>
      <TouchableHighlight onPress={() => changeFlexStyle(flex+1)}>
        <View style={styles.button}>
          <Text> Flex +1 </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => changeFlexStyle(flex-1)}>
        <View style={styles.button}>
          <Text> Flex -1</Text>
        </View>
      </TouchableOpacity>
      <Text>{nameBox}</Text>
      <Text>Flex: {flex}</Text>
    </View>
  )
}



export default Box07

