import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';
import SearchPokemon from '../screens/SearchPokemon';

type Props = {}

type SearchPokedexStackParamList = {
    SearchPokedex: undefined,
    Pokemon: {name : string},
}

const Stack = createNativeStackNavigator<SearchPokedexStackParamList>();

const StackNavTabSearch = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
            <Stack.Screen 
                name="SearchPokedex" 
                component={SearchPokemon} 
                options={{ title: 'Search in Pokedex',  headerTitleAlign: 'center', 
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
                    title: `${route.params.name.toUpperCase()}`,  headerTitleAlign: 'center',
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

export default StackNavTabSearch

const styles = StyleSheet.create({})