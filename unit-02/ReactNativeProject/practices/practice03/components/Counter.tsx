import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice03Styles';

type Props = {}

const Counter = (props: Props) => {
  const  [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title='Increment' onPress={()=>setCounter(counter+1)}/>
      <Button title='Substract' onPress={()=>setCounter(counter-1)}/>
    </View>
  )
}

export default Counter

