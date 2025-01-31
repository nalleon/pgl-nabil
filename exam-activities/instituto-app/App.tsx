/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import DrawerNav from './src/navigation/drawer/DrawerNav';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNav from './src/navigation/stack/AuthStackNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import UserContext from './src/context/UserContext';
import AlumnoContext from './src/context/AlumnoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsignaturaContext from './src/context/AsignaturaContext';



function App(): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      setIsAuthenticated(!!token); 
    };
    checkAuth();
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <UserContext>
            <AlumnoContext>
              <AsignaturaContext>
                { isAuthenticated ?
                    <DrawerNav/>
                    :
                    <AuthStackNav/>
                }
              </AsignaturaContext>
            </AlumnoContext>
          </UserContext>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}



export default App;
