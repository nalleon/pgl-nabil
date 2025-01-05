import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box05 from '../components/Box06'
import styles from '../themes/Practice06Styles'
import BoxContainer06 from '../components/BoxContainer06'
import Practice02 from '../../practice02/components/Practice02';

type Props = {}

const Practice06Screen = (props: Props) => {

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Contenedor principal </Text>
      <BoxContainer06/>
    </View>
  )
}

export default Practice06Screen

