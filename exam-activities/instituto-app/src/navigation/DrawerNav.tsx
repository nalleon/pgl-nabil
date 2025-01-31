import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';
import UserProfile from '../screens/usuario/UserProfile';
import LogoutScreen from '../screens/auth/LogoutScreen';
import UserContext, { UserNameContext } from '../context/UserContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MatriculaStackNav from './MatriculaStackNav';
import { useJwt } from 'react-jwt';

type Props = {}

type TokenPayload = {
  role: string;
};


const Drawer = createDrawerNavigator();
const DrawerNav = (props: Props) => {

  const context = useContext(UserNameContext);
  
  const authorizedRol = "ROLE_ADMIN";

  const [isAdmin, setiIsAdmin] = useState<boolean>(false);
  const { decodedToken } = useJwt<TokenPayload>(context.token);



  useEffect(() => {

    const checkRole = async () => {
      if(context.rol == authorizedRol){
        setiIsAdmin(true);
      } else {
        setiIsAdmin(false);
      }
    } 

    context.setRol(decodedToken?.role);

    checkRole();

  }, [decodedToken, context.rol])
  


  return (
    <Drawer.Navigator id={undefined}>
      <Drawer.Screen name="Perfil" component={UserProfile} options={{ title: 'Mi perfil' }} />
      {
        isAdmin ? 
          <Drawer.Screen name="Operaciones Admin" component={TabNav} options={{ title: 'Operaciones' }}/>
        :
        <Drawer.Screen name="Operaciones User" component={MatriculaStackNav} options={{ title: 'Operaciones User' }}/>
      }
      <Drawer.Screen name="Logout" component={LogoutScreen} options={{ title: 'Cerrar sesión' }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})