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

import InitialScreen from './practices/practice03/screens/InitialScreen';
import Practice02 from './practices/practice02/components/Practice02';
import BoxContainer from './practices/practice04/components/BoxContainer';
import Practice04Screen from './practices/practice04/screens/Practice04Screen';
import Practice05Screen from './practices/practice05/screens/Practice05Screen';
import Practice06Screen from './practices/practice06/screens/Practice06Screen';
import Practice10Screen from './practices/practice10/screens/Practice10Screen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
      <Practice10Screen/>
    </SafeAreaView>
  );
}


export default App;
