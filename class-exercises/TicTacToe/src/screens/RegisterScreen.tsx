import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'RegisterScreen'>;


const RegisterScreen = (props: AuthProps) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})