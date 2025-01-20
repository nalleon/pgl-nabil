import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';
import axios from 'axios';

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

type PropsArticle = NativeStackScreenProps<FeedStackParamList, 'ArticleDetail'>;
const ArticleDetail = (props: PropsArticle) => {
    const { article } = props.route.params;

    const [content, setContent] = useState<string | null>(null);

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        try {
            const cachedContent = await getCache(article.link);
            if (cachedContent) {
                setContent(cachedContent);
                return;
            }
            
        } catch (error) {
            console.error('Error loading content:', error);
        }
    };

    async function getCache(uri:string){
        try{
            const response = await axios.get(uri);
            const data = response.data;
            AsyncStorage.setItem(uri, JSON.stringify(data))
            return data;
        }catch( error){
            const localData = await AsyncStorage.getItem(uri);
            if(localData){
                return localData;
            }

            return null;
        }
    }

    if (!content) {
        return (
            <View style={styles.loader}>
            <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }
        return <WebView source={{html: content}} />;
    };

export default ArticleDetail;

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
});