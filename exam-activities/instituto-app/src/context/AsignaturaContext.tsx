import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'



type Props = {
  children: React.ReactNode;
}

type AsignaturaContextType ={
    nombre: string,
    setNombre: (nombre: string) => void,
    curso: string,
    setCurso: (curso: string) => void,
}

export const AsignaturaContextHook = createContext<AsignaturaContextType>({} as AsignaturaContextType );


const AsignaturaContext = (props: Props) => {
    const [nombre, setNombre] = useState<string>("");
    const [curso, setCurso] = useState<string>("");

    const contextValues: AsignaturaContextType  = {
        nombre,
        setNombre,
        curso,
        setCurso
    }

  return (
    <AsignaturaContextHook.Provider value={contextValues}>
      {props.children}
    </AsignaturaContextHook.Provider>
  )
}

export default AsignaturaContext

const styles = StyleSheet.create({})