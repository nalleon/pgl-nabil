import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav27 from './StackNav27';
import About27 from '../screens/About27';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

const Tab = createBottomTabNavigator();

const TabNav27 = (props: Props) => {
    return (
            <Tab.Navigator 
                screenOptions={{headerShown:false}}>

                <Tab.Screen name='Operations' component={StackNav27}
                    options={ {tabBarIcon: ({focused}) => 
                        <Icon name={(focused) ? 'calculator' : 'calculator-outline'} size={30}/>
                    }
                }
                
                />
                <Tab.Screen name='About' component={About27}
                    options={ {tabBarIcon: ({focused}) => 
                            <Icon name={(focused) ? 'person' : 'person-outline'} size={30}/>
                        }
                    }
                />

            </Tab.Navigator>
    )
}

export default TabNav27

const styles = StyleSheet.create({})