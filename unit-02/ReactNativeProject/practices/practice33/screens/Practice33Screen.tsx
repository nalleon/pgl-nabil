import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Task33Context from '../components/Task33Context'
import Task33Stack from '../navigations/Task33Stack';
import { dataSource } from '../data/Database';

type Props = {}

const Practice33Screen = (props: Props) => {


    return (
            <NavigationContainer>
                <Task33Context>
                    <Task33Stack/>
                </Task33Context>
            </NavigationContainer>
    )
}

export default Practice33Screen

const styles = StyleSheet.create({})