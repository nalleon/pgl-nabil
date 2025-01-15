import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

type Props = {}

type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string, url: string, id : number},
}

const Stack = createNativeStackNavigator<PokedexStackParamList>();

const StackNavTabPokedex = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
            <Stack.Screen 
                name="Pokedex" 
                component={Pokedex} 
                options={{ title: 'Pokedex',  headerTitleAlign: 'center', 
                    headerStyle: {
                        backgroundColor: '#008080', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                }}
            />
            
            <Stack.Screen 
                name="Pokemon" 
                component={Pokemon} 
                options={({ route }) => ({
                    title: `${route.params.name.toUpperCase()}`,
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

export default StackNavTabPokedex

const styles = StyleSheet.create({})