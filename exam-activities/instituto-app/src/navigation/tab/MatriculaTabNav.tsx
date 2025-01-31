import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddMatricula from '../../screens/matriculas/AddMatricula';
import DeleteMatriculaScreen from '../../screens/matriculas/DeleteMatriculaScreen';
import MatriculaStackNav from '../stack/MatriculaStackNav';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

const Tab = createBottomTabNavigator();

const MatriculaTabNav = (props: Props) => {
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


          <Tab.Screen name='Agregar matricula' component={AddMatricula}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'person-add' : 'person-add-outline'} size={30}/>
              }
          }/>

          <Tab.Screen name='Eliminar alumno' component={DeleteMatriculaScreen}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'trash' : 'trash-outline'} size={30}/>
              }
          }/>

          <Tab.Screen name='Buscar' component={MatriculaStackNav}
              options={ {tabBarIcon: ({focused}) => 
                  <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
              }
          }/>
              
      </Tab.Navigator>
  )
}


export default MatriculaTabNav

const styles = StyleSheet.create({})