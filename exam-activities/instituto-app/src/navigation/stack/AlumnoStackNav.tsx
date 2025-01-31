import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindAlumno from '../../screens/alumnos/FindAlumno';
import AlumnoProfile from '../../screens/alumnos/AlumnoProfile';

type Props = {}

type AlumnoDetails = {
  FindAlumno: undefined,
  AlumnoProfile: undefined,
}

const Stack = createNativeStackNavigator<AlumnoDetails>();

const AlumnoStackNav = (props: Props) => {
  return (
    <Stack.Navigator id={undefined}
    screenOptions={{contentStyle:{backgroundColor:'white'}}}
    >
        <Stack.Screen 
            name="FindAlumno" 
            component={FindAlumno} 
            options={({ route }) => ({
                headerShown: false,
            })} 
        />
        
        <Stack.Screen 
            name="AlumnoProfile" 
            component={AlumnoProfile} 
            options={({ route }) => ({
                title: `Alumno`,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,      
                }
            })} 
        />
    </Stack.Navigator>
  )
}

export default AlumnoStackNav

const styles = StyleSheet.create({})