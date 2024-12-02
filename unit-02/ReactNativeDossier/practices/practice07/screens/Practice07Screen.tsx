import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box05 from '../components/Box07'
import styles from '../themes/Practice07Styles'
import BoxContainer07 from '../components/BoxContainer07'
import Practice02 from '../../practice02/components/Practice02';

type Props = {}

const Practice07Screen = (props: Props) => {

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Contenedor principal </Text>
      <BoxContainer07/>
    </View>
  )
}

export default Practice07Screen

