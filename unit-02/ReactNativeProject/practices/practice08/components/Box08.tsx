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



  return (
    <View
      style={[styles.circle,
        {
          backgroundColor:`rgb(${red}, ${green}, ${blue})`,
        },
      ]}
    >
      <Text style={styles.circleText}>{nameBox}</Text>
    </View>

  )
}



export default Box08

