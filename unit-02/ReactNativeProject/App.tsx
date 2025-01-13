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


import Practice10Screen from './practices/practice10/screens/Practice10Screen';
import Practice23Screen from './practices/practice23/screens/Practice23Screen';
import Practice24Screen from './practices/practice24/screens/Practice24Screen';



function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{flex:1}}>
      <Practice24Screen/>
    </SafeAreaView>
  );
}



export default App;
