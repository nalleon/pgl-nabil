import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import PrincipalStack from '../navigations/PrincipalStack'

type Props = {}


const Practice21Screen = (props: Props) => {
    return (
        <NavigationContainer>
            <PrincipalStack />
        </NavigationContainer>
    )
}

export default Practice21Screen

const styles = StyleSheet.create({

})