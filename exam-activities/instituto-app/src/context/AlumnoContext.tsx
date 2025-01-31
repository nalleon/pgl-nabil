import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'



type Props = {
  children: React.ReactNode;
}

type AlumnoContextType ={
    dni: string,
    setDNI: (dni: string) => void,
    nombre: string,
    setNombre: (nombre: string) => void,
    apellidos: string,
    setApellidos: (apellidos: string) => void,
}

export const AlumnoContextHook = createContext<AlumnoContextType>({} as AlumnoContextType );


const AlumnoContext = (props: Props) => {
    const [dni, setDNI] = useState<string>("");
    const [nombre, setNombre] = useState<string>("");
    const [apellidos, setApellidos] = useState<string>("");

    const contextValues: AlumnoContextType  = {
        dni,
        setDNI,
        nombre,
        setNombre,
        apellidos,
        setApellidos
    }

  return (
    <AlumnoContextHook.Provider value={contextValues}>
      {props.children}
    </AlumnoContextHook.Provider>
  )
}

export default AlumnoContext

const styles = StyleSheet.create({})