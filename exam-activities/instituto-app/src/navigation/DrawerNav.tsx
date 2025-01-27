import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AlumnoProfile from '../screens/AlumnoProfile';
import TabNav from './TabNav';

type Props = {}
const Drawer = createDrawerNavigator();
const DrawerNav = (props: Props) => {
  return (
    <Drawer.Navigator id={undefined}>
      <Drawer.Screen name="Perfil" component={AlumnoProfile} options={{ title: 'Mi perfil' }} />
      <Drawer.Screen name="Operaciones" component={TabNav} options={{ title: 'Operaciones' }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})