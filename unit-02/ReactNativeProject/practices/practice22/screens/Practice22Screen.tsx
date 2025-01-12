import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import PrincipalStack22 from '../navigations/PrincipalStack22'

type Props = {}


const Practice22Screen = (props: Props) => {
    return (
        <NavigationContainer>
            <PrincipalStack22 />
        </NavigationContainer>
    )
}

export default Practice22Screen

const styles = StyleSheet.create({

})