import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {}


type AsignaturaDetailsType = {
  FindAsignaturaScreen: undefined,
  AsignaturaDetails: undefined,
}

type PropsAsignatura = NativeStackScreenProps<AsignaturaDetailsType, 'AsignaturaDetails'>;

const AsignaturaDetails = (props: Props) => {
  return (
    <View>
      <Text>AsignaturaDetails</Text>
    </View>
  )
}

export default AsignaturaDetails

const styles = StyleSheet.create({})