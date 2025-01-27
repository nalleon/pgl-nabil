import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import TabNav40 from '../navigation/TabNav40';
import { dataSource } from '../data/Database';

type Props = {}

const Practice40Screen = (props: Props) => {
        useEffect(() => {
            async function initDB() {
                await dataSource.initialize();
            }
            initDB();
        }, []);
    
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <TabNav40/>
            </NavigationContainer>  
        </GestureHandlerRootView>
    )
}

export default Practice40Screen

const styles = StyleSheet.create({})