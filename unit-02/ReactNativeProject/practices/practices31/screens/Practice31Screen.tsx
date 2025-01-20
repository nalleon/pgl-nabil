import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Practice31StackNav from '../navigations/Practice31StackNav';
type Props = {}


const Practice31Screen = (props: Props) => {

  return (
    <GestureHandlerRootView>
        <NavigationContainer>
            <Practice31StackNav/>
        </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Practice31Screen

const styles = StyleSheet.create({})