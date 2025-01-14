import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNav27 from '../navigations/TabNav27'

type Props = {}

const Practice27Screen = (props: Props) => {
  return (
        <NavigationContainer>
            <TabNav27/>
        </NavigationContainer>
  )
}

export default Practice27Screen

const styles = StyleSheet.create({})