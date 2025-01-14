import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetScreen from '../screens/PetScreen';

type Props = {}

export type PrincipalStackParamList = {
  PetScreen: undefined;
  Breed: {name : string},
};

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const StackNav26 = (props: Props) => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: { backgroundColor: '#008080' },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
    }}
    >
    <Stack.Screen 
        name="PetScreen" 
        component={PetScreen} 
        options={{ title: 'Home' }} 
        
    />

    </Stack.Navigator>
  )
}

export default StackNav26

const styles = StyleSheet.create({})