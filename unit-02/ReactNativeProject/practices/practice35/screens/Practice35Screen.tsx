import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { dataSource } from '../data/Database'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Practice35TabNav from '../navigations/Practice35TabNav'

type Props = {}

const Practice35Screen = (props: Props) => {
  

    useEffect(() => {
        async function initDB() {
            await dataSource.initialize();
        }
        initDB();
    }, []);


  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Practice35TabNav/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Practice35Screen

const styles = StyleSheet.create({})