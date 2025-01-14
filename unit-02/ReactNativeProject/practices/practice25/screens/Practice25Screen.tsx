import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Practice25SideMenu from '../navigations/Practice25SideMenu'
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Props = {
}

const Practice25Screen = (props: Props) => {
    return (
        <NavigationContainer>
            <Practice25SideMenu />
        </NavigationContainer>
    )
}

export default Practice25Screen

const styles = StyleSheet.create({})