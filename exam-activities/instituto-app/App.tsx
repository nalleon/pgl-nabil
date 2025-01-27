/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import DrawerNav from './src/navigation/DrawerNav';
import { NavigationContainer } from '@react-navigation/native';



function App(): React.JSX.Element {
  
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <DrawerNav/>
      </NavigationContainer>
    </SafeAreaView>
  );
}



export default App;
