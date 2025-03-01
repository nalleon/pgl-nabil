import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AlumnoProfile from '../../screens/alumnos/AlumnoProfile';
import AlumnoStackNav from '../stack/AlumnoStackNav';
import AddAlumnoScreen from '../../screens/alumnos/AddAlumnoScreen';
import DeleteAlumnoScreen from '../../screens/alumnos/DeleteAlumnoScreen';

type Props = {}
const Tab = createBottomTabNavigator();

const AlumnoTabNav = (props: Props) => {
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


          <Tab.Screen name='Agregar alumno' component={AddAlumnoScreen}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'person-add' : 'person-add-outline'} size={30}/>
              }
          }/>

          <Tab.Screen name='Eliminar alumno' component={DeleteAlumnoScreen}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'trash' : 'trash-outline'} size={30}/>
              }
          }/>

          <Tab.Screen name='Buscar' component={AlumnoStackNav}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
              }
          }/>
              
      </Tab.Navigator>
  )
}

export default AlumnoTabNav

const styles = StyleSheet.create({})