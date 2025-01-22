import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductList37 from '../screens/ProductList37';
import SearchFilterProduct37 from '../screens/SearchFilterProduct37';
import CategoryList37 from '../screens/CategoryList37';


type Props = {
    
}
const Tab = createBottomTabNavigator();


const Practice37TabNav = (props: Props) => {

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
                
            <Tab.Screen name='Shop' component={ProductList37}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'list' : 'list-outline'} size={30}/>
                }

            }/>
            
            <Tab.Screen name='Search in shop' component={SearchFilterProduct37}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='Categories' component={CategoryList37}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'receipt' : 'receipt-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

export default Practice37TabNav

