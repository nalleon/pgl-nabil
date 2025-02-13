import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { styles } from './InitScreen';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LocalHomeScreen'>;


const LocalHomeScreen = (props: AuthProps) => {
  return (
    <View style={styles.container}>
      <Text>LocalHomeScreen</Text>

      <View style={{alignItems:'flex-end'}}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('InitScreen')}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LocalHomeScreen

