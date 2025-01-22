import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductList35 from '../screens/ProductList35';
import SearchFilterProduct35 from '../screens/SearchFilterProduct35';
import CategoryList from '../screens/CategoryList';


type Props = {
    
}
const Tab = createBottomTabNavigator();


const Practice35TabNav = (props: Props) => {

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
                
            <Tab.Screen name='Shop' component={ProductList35}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'list' : 'list-outline'} size={30}/>
                }

            }/>
            
            <Tab.Screen name='Search in shop' component={SearchFilterProduct35}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='Categories' component={CategoryList}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'receipt' : 'receipt-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

export default Practice35TabNav

