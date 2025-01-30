import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNav from './DrawerNav';

type Props = {}

type AuthScreens = {
  LoginScreen: undefined,
  RegisterScreen: undefined,
  DrawerNav: undefined
}

const Stack = createNativeStackNavigator<AuthScreens>();

const AuthStackNav = (props: Props) => {
  return (
    <Stack.Navigator id={undefined}
    screenOptions={{contentStyle:{backgroundColor:'white'}}}
    >
        <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ title: 'Login',  headerTitleAlign: 'center', 
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,                
                }
            }}
        />
        
        <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
            options={({ route }) => ({
                title: `Register`,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,      
                }
            })} 
        />

    <Stack.Screen 
            name="DrawerNav" 
            component={DrawerNav} 
            options={({ route }) => ({
                title: `Principal`,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,      
                }
            })} 
        />
    </Stack.Navigator>

  )
}

export default AuthStackNav

const styles = StyleSheet.create({})