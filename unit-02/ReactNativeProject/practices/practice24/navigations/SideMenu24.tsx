import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import StackNavigation24 from './StackNavigation24';
import AboutScreen from '../screens/AboutScreen';

type Props = {
    
}

const Drawer = createDrawerNavigator();

const SideMenu24 = (props: Props) => {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#008080' },
            headerTintColor: 'white',
            drawerActiveTintColor: '#1E90FF',
        }}
        >
            <Drawer.Screen 
                name="StackNavigation" 
                component={StackNavigation24} 
                options={{ title: 'StackNav' }} 
            />
            <Drawer.Screen 
                name="AboutScreen" 
                component={AboutScreen} 
                options={{ title: 'About me' }} 
            />
        </Drawer.Navigator>
    )
}

export default SideMenu24

const styles = StyleSheet.create({})