import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '../components/Box'
import styles from '../themes/Practice04Styles'
import BoxContainer from '../components/BoxContainer'
import Practice02 from '../../practice02/components/Practice02';

type Props = {}

const Practice04Screen = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Contenedor principal </Text>
      <BoxContainer/>
    </View>
  )
}

export default Practice04Screen

