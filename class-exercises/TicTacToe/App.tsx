/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BoardScreen from './src/screens/BoardScreen';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
      <BoardScreen/>
    </SafeAreaView>
  );
}

export default App;
