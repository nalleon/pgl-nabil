import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNav28 from '../navigations/TabNav28'
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {}

const Practice28Screen = (props: Props) => {
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <TabNav28/>
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}

export default Practice28Screen

const styles = StyleSheet.create({})