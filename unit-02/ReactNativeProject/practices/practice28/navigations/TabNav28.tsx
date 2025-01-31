import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import StackNavTabPokedex from './StackNavTabPokedex';
import StackNavTabSearch from './StackNavTabSearch';

type Props = {}
const Tab = createBottomTabNavigator();


const TabNav28 = (props: Props) => {

    const { width, height} = useWindowDimensions();
    const isHorizontal = width > height;
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarPosition: isHorizontal ? 'left' : 'bottom',
                tabBarVariant: isHorizontal ? 'material' : 'uikit',
                tabBarLabelPosition: 'below-icon'
            }}>   
                
            <Tab.Screen name='Pokedex' component={StackNavTabPokedex}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'list' : 'list-outline'} size={30}/>
                }
            }/>
            
            <Tab.Screen name='Search' component={StackNavTabSearch}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

export default TabNav28

