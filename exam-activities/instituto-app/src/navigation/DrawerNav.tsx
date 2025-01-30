import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';
import UserProfile from '../screens/alumnos/UserProfile';
import LogoutScreen from '../screens/auth/LogoutScreen';
import { UserNameContext } from '../context/UserContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}




const Drawer = createDrawerNavigator();
const DrawerNav = (props: Props) => {

  return (
    <Drawer.Navigator id={undefined}>
      <Drawer.Screen name="Perfil" component={UserProfile} options={{ title: 'Mi perfil' }} />
      <Drawer.Screen name="Operaciones" component={TabNav} options={{ title: 'Operaciones' }}/>
      <Drawer.Screen name="Logout" component={LogoutScreen} options={{ title: 'Cerrar sesión' }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})