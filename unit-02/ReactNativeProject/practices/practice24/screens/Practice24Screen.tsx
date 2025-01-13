import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SideMenu24 from '../navigations/SideMenu24'
import { NavigationContainer } from '@react-navigation/native'

type Props = {}

const Practice24Screen = (props: Props) => {
    return (
            <NavigationContainer>
                <SideMenu24 />
            </NavigationContainer>
    )
}

export default Practice24Screen

const styles = StyleSheet.create({})