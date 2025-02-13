import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EjemploRepository } from '../data/Database';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import { PruebaStackParamList } from '../navigations/PruebaStack';




type PropsInicio = NativeStackScreenProps<PruebaStackParamList, 'Inicio'>;

function InitScreen({navigation,route}:PropsInicio) {

   


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