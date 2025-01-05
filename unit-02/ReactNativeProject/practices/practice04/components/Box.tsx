import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice04Styles';

type Props = {
  color : string;
}

const Box = (props: Props) => {
  const { color } = props;

  return (
    <View style={{...styles.box, backgroundColor:color}}>
    </View>
  )
}

export default Box

