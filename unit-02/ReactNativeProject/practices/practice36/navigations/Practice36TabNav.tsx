import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductList36 from '../screens/ProductList36';
import SearchFilterProduct36 from '../screens/SearchFilterProduct36';
import CategoryList36 from '../screens/CategoryList36';


type Props = {
    
}
const Tab = createBottomTabNavigator();


const Practice36TabNav = (props: Props) => {

    const { width, height} = useWindowDimensions();
    const isHorizontal = width > height;
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarPosition: isHorizontal ? 'left' : 'bottom',
                tabBarVariant: isHorizontal ? 'material' : 'uikit',
                tabBarLabelPosition: 'below-icon',
            }}
            >   
                
            <Tab.Screen name='Shop' component={ProductList36}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'list' : 'list-outline'} size={30}/>
                }

            }/>
            
            <Tab.Screen name='Search in shop' component={SearchFilterProduct36}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='Categories' component={CategoryList36}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'receipt' : 'receipt-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

export default Practice36TabNav

