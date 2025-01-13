import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Practice10Screen from '../../practice10/screens/Practice10Screen'

type Props = {}

const Tab = createBottomTabNavigator();
const TabPractice27 = (props: Props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Calc" component={Practice10Screen}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabPractice27

const styles = StyleSheet.create({})