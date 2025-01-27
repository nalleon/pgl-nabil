import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import TabNav39 from '../navigation/TabNav39';
import { dataSource } from '../data/Database';

type Props = {}

const Practice39Screen = (props: Props) => {
        useEffect(() => {
            async function initDB() {
                await dataSource.initialize();
            }
            initDB();
        }, []);
    
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <TabNav39/>
            </NavigationContainer>  
        </GestureHandlerRootView>
    )
}

export default Practice39Screen

const styles = StyleSheet.create({})