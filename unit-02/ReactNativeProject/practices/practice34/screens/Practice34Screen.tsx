import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { dataSource } from '../data/Database'
import Practice34TabNav from '../navigations/Practice34TabNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

type Props = {}

const Practice34Screen = (props: Props) => {
  

    useEffect(() => {
        async function initDB() {
            await dataSource.initialize();
        }
        initDB();
    }, []);


  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Practice34TabNav/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Practice34Screen

const styles = StyleSheet.create({})