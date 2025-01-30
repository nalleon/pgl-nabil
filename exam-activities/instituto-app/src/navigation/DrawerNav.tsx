import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';
import UserProfile from '../screens/alumnos/UserProfile';

type Props = {}
const Drawer = createDrawerNavigator();
const DrawerNav = (props: Props) => {
  return (
    <Drawer.Navigator id={undefined}>
      <Drawer.Screen name="Perfil" component={UserProfile} options={{ title: 'Mi perfil' }} />
      <Drawer.Screen name="Operaciones" component={TabNav} options={{ title: 'Operaciones' }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})