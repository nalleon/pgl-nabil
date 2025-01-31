import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AlumnoTabNav from '../tab/AlumnoTabNav';
import UserProfile from '../../screens/usuario/UserProfile';
import LogoutScreen from '../../screens/auth/LogoutScreen';
import UserContext, { UserNameContext } from '../../context/UserContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MatriculaStackNav from '../stack/MatriculaStackNav';
import { useJwt } from 'react-jwt';
import AlumnoList from '../../screens/alumnos/normal.user/AlumnoList';
import AsignaturaStackNav from '../stack/AsignaturaStackNav';
import AsignaturaList from '../../screens/alumnos/normal.user/AsignaturaList';
import AsignaturaTabNav from '../tab/AsignaturaTabNav';
import MatriculaTabNav from '../tab/MatriculaTabNav';

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
          <Drawer.Screen name="Operaciones" component={AlumnoTabNav} options={{ title: 'Alumnos (ADMIN)' }}/>

        :
        <Drawer.Screen name="Operaciones" component={AlumnoList} options={{ title: 'Alumnos' }}/>
      }

      {
       isAdmin ?
        <Drawer.Screen name="OperacionesAsignaturas" component={AsignaturaTabNav} options={{ title: 'Asignaturas (ADMIN)' }}/>
        :
        <Drawer.Screen name="OperacionesAsignaturas" component={AsignaturaList} options={{ title: 'Asignaturas' }}/>
      }

      {
        isAdmin &&
        <Drawer.Screen name="OperacionesMatriculas" component={MatriculaTabNav} options={{ title: 'Matriculas (ADMIN)' }}/> 
      }
      <Drawer.Screen name="Logout" component={LogoutScreen} options={{ title: 'Cerrar sesión' }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})