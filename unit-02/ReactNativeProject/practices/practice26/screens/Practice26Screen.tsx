import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Practice26SideMenu from '../navigations/Practice26SideMenu'

type Props = {}

const Practice26Screen = (props: Props) => {
  return (
    <NavigationContainer>
        <Practice26SideMenu/>
    </NavigationContainer>
  )
}

export default Practice26Screen

const styles = StyleSheet.create({})