import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import StackNavTabPokedex from './StackNavTabPokedex';
import StackNavTabSearch from './StackNavTabSearch';

type Props = {}
const Tab = createBottomTabNavigator();
type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string},
}

type PropsPokedex = NativeStackScreenProps<PokedexStackParamList, 'Pokedex'>;

const TabNav28 = (props: Props) => {

    return (
        <Tab.Navigator
            screenOptions={{headerShown:false}}>   
                
            <Tab.Screen name='Pokedex' component={StackNavTabPokedex}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'list' : 'list-outline'} size={30}/>
                }

            }/>
            
            <Tab.Screen name='PokemonSearch' component={StackNavTabSearch}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

export default TabNav28

const styles = StyleSheet.create({})