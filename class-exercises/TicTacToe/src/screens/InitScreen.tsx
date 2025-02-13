import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EjemploRepository } from '../data/Database';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';




type AuthProps = NativeStackScreenProps<AuthStackParamList, 'InitScreen'>;

function InitScreen(props:AuthProps) {


    const crear =  async ()=>{
    
        const datos = await EjemploRepository.find(  );
        console.log("se ha credado : " + JSON.stringify(datos));
        


    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,marginTop: 36}}>
        <Text>inicio screen</Text>
        

      
      </View>
    );
}


const styles = StyleSheet.create({})

export default InitScreen;