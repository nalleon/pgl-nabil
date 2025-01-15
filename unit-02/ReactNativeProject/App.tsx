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
} from 'react-native';
import Practice28Screen from './practices/practice28/screens/Practice28Screen';






function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{flex:1}}>
      <Practice28Screen/>
    </SafeAreaView>
  );
}



export default App;
