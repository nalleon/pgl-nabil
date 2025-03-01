import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import DrawerNav from '../drawer/DrawerNav';
import LogoutScreen from '../../screens/auth/LogoutScreen';

type Props = {}

type AuthScreens = {
  LoginScreen: undefined,
  RegisterScreen: undefined,
  DrawerNav: undefined,
  LogoutScreen: undefined
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
                headerShown: false, 
            })} 
        />

    <Stack.Screen 
            name="LogoutScreen" 
            component={LogoutScreen} 
            options={({ route }) => ({
                title: `Logout`,
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