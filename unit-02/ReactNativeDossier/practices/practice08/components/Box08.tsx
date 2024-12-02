import { Alert, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice08Styles';

type Props = {
  nameBox : string;
  red : number;
  green : number;
  blue : number;
}

const Box08 = (props: Props) => {
  const { nameBox, red, green, blue} = props;

  const [flex, setFlex] = useState(0);
  function changeFlexStyle(flexLevel : number) {
    if (flexLevel < 0){
      return;
    }

    setFlex(flexLevel);
    Alert.alert('changed flex to: ' + flexLevel);
  }

  return (
    <View style={{...styles.box, backgroundColor:`rgb(${red}, ${green}, ${blue})`, flex:flex}}>
      <Text style={{textAlign:'center'}}>{nameBox}</Text>
    </View>
  )
}



export default Box08

