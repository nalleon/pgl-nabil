import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import DeleteAsignaturaScreen from '../../screens/asignaturas/DeleteAsignaturaScreen';
import AddAsignaturaScreen from '../../screens/asignaturas/AddAsignaturaScreen';
import AsignaturaStackNav from '../stack/AsignaturaStackNav';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type Props = {}

const Tab = createBottomTabNavigator();

const AsignaturaTabNav = (props: Props) => {
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


          <Tab.Screen name='Agregar alumno' component={AddAsignaturaScreen}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'person-add' : 'person-add-outline'} size={30}/>
              }
          }/>

          <Tab.Screen name='Eliminar alumno' component={DeleteAsignaturaScreen}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'trash' : 'trash-outline'} size={30}/>
              }
          }/>

          <Tab.Screen name='Buscar' component={AsignaturaStackNav}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
              }
          }/>
              
      </Tab.Navigator>
  )
}

export default AsignaturaTabNav

const styles = StyleSheet.create({})