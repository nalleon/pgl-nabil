import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { dataSource } from '../data/Database'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Practice37TabNav from '../navigations/Practice37TabNav'

type Props = {}

const Practice37Screen = (props: Props) => {
  

    useEffect(() => {
        async function initDB() {
            await dataSource.initialize();
        }
        initDB();
    }, []);


  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Practice37TabNav/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Practice37Screen

const styles = StyleSheet.create({})