import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import PetScreen from '../screens/PetScreen';
import BreedScreen from '../screens/BreedScreen';

type Props = {}

const Drawer = createDrawerNavigator();

const Practice26SideMenu = (props: Props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dogs" component={BreedScreen} initialParams={{ category: 'dogs' }} options={{ title: 'Dogs' }} />
      <Drawer.Screen name="Cats" component={BreedScreen} initialParams={{ category: 'cats' }} options={{ title: 'Cats' }}/>
    </Drawer.Navigator>
  )
}

export default Practice26SideMenu

const styles = StyleSheet.create({})