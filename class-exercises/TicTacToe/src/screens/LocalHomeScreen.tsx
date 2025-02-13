import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LocalHomeScreen'>;


const LocalHomeScreen = (props: AuthProps) => {
  return (
    <View>
      <Text>LocalHomeScreen</Text>
    </View>
  )
}

export default LocalHomeScreen

const styles = StyleSheet.create({})