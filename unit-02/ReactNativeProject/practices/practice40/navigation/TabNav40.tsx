import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropietarioScreen from '../screens/PropietarioScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import CasaScreen from '../screens/CasaScreen';
import PropietarioCasaScreen from '../screens/PropietarioCasaScreen';
import ListaScreen from '../screens/ListaScreen';
import EliminarRelacion from '../screens/EliminarRelacion';

type Props = {}
const Tab = createBottomTabNavigator();

const TabNav40 = (props: Props) => {
    const { width, height} = useWindowDimensions();
    const isHorizontal = width > height;
    return (
        <Tab.Navigator id={undefined}
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarPosition: isHorizontal ? 'left' : 'bottom',
                tabBarVariant: isHorizontal ? 'material' : 'uikit',
                tabBarLabelPosition: 'below-icon',
            }}
            >   
                
            <Tab.Screen name='Propietarios' component={PropietarioScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'person' : 'person-outline'} size={30}/>
                }

            }/>
            
            <Tab.Screen name='Casas' component={CasaScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'home' : 'home-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='PropietariosCasas' component={PropietarioCasaScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'people-circle' : 'people-circle-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='Listado' component={ListaScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'receipt' : 'receipt-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='Eliminar relacion' component={EliminarRelacion}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'trash' : 'trash-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

export default TabNav40

const styles = StyleSheet.create({})