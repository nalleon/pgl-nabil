import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import TabNav38 from '../navigation/TabNav38';
import { dataSource } from '../data/Database';

type Props = {}

const Practice38Screen = (props: Props) => {
        useEffect(() => {
            async function initDB() {
                await dataSource.initialize();
            }
            initDB();
        }, []);
    
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <TabNav38/>
            </NavigationContainer>  
        </GestureHandlerRootView>
    )
}

export default Practice38Screen

const styles = StyleSheet.create({})