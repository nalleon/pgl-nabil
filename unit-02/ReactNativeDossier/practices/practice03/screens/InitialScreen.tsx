import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from '../components/Counter'
import styles from '../themes/Practice03Styles'

type Props = {}

const InitialScreen = (props: Props) => {
  return (
    <View style={styles.initialScreen}>
        <Counter/>
    </View>
  )
}

export default InitialScreen

