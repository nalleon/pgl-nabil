import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { dataSource } from '../data/Database'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Practice36TabNav from '../navigations/Practice36TabNav'

type Props = {}

const Practice36Screen = (props: Props) => {
  

    useEffect(() => {
        async function initDB() {
            await dataSource.initialize();
        }
        initDB();
    }, []);


  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Practice36TabNav/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Practice36Screen

const styles = StyleSheet.create({})