import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindAsignaturaScreen from '../../screens/asignaturas/FindAsignaturaScreen';
import AsignaturaDetails from '../../screens/asignaturas/AsignaturaDetails';

type Props = {}

type AsignaturaNav = {
  FindAsignatura: undefined,
  AsignaturaDetails: undefined,
}

const Stack = createNativeStackNavigator<AsignaturaNav>();

const AsignaturaStackNav = (props: Props) => {
  return (
    <Stack.Navigator id={undefined}
    screenOptions={{contentStyle:{backgroundColor:'white'}}}
    >
        <Stack.Screen 
            name="FindAsignatura" 
            component={FindAsignaturaScreen} 
            options={({ route }) => ({
                headerShown: false,
            })} 
        />
        
        <Stack.Screen 
            name="AsignaturaDetails" 
            component={AsignaturaDetails} 
            options={({ route }) => ({
                title: `Asignatura`,
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


export default AsignaturaStackNav

const styles = StyleSheet.create({})