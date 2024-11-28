import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice02Styles';

type Props = {}
const  [counter, setCounter] = useState(0);

const Practice02 = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title='Click me!' onPress={()=>setCounter(counter+1)}/>
    </View>
  )
}

export default Practice02

