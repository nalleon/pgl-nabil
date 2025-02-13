import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LoginScreen = (props: AuthProps) => {
    return (
        <View>
            <Text>LoginScreen</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})