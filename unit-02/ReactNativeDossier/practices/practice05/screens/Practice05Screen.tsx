import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box05 from '../components/Box05'
import styles from '../themes/Practice05Styles'
import BoxContainer05 from '../components/BoxContainer05'
import Practice02 from '../../practice02/components/Practice02';

type Props = {}

const Practice05Screen = (props: Props) => {

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Contenedor principal </Text>
      <BoxContainer05/>
    </View>
  )
}

export default Practice05Screen

