import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArticleDetail from '../screens/ArticleDetail';
import FeedScreen from '../screens/FeedScreen';

type Props = {}

type FeedStackParamList = {
    FeedScreen: undefined,
    ArticleDetail: {article : Article},
}

type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}

const Stack = createNativeStackNavigator<FeedStackParamList>();

const Practice31StackNav = (props: Props) => {
    return (
        <Stack.Navigator
        screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
        <Stack.Screen 
            name="FeedScreen" 
            component={FeedScreen} 
            options={{ title: 'FeedScreen',  headerTitleAlign: 'center', 
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,                
                }
            }}
        />
        
        <Stack.Screen 
            name="ArticleDetail"  
            component={ArticleDetail} 
            options={({ route }) => ({
                title: `${route.params.article.title.toUpperCase()}`,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,      
                }
            })} 
        />
    </Stack.Navigator>
    )
}

export default Practice31StackNav

const styles = StyleSheet.create({})