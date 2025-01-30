import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode;
}
type UsuarioContextType ={
  nombreUsuario: string,
  setNombreUsuario: (nombreUsuario: string) => void,

}

export const UserNameContext = createContext<UsuarioContextType >({} as UsuarioContextType );
const UserContext = (props: Props) => {
  const [nombreUsuario, setNombreUsuario] = useState<string>("");

  const contextValues: UsuarioContextType  = {
    nombreUsuario,
    setNombreUsuario
  }

  return (
    <UserNameContext.Provider value={contextValues}>
      {props.children}
    </UserNameContext.Provider>

  )
}

export default UserContext

const styles = StyleSheet.create({})