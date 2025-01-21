import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';
import axios from 'axios';
import { ArticlesContext } from '../context/ArticleContext';

type Props = {}

type FeedStackParamList = {
    FeedScreen: undefined,
    ArticleDetail: undefined,
}
type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}

type PropsArticle = NativeStackScreenProps<FeedStackParamList, 'ArticleDetail'>;
const ArticleDetail = (props: PropsArticle) => {

    const [content, setContent] = useState<string | null>(null);

    const context = useContext(ArticlesContext);
    
    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        try {
            setContent(context.currentArticle.description);
        } catch (error) {
            console.error('Error loading content:', error);
        }
    };


    if (content) {
        return <WebView source={{html: content}} style={styles.article}/>;
    }
    
};

export default ArticleDetail;

const styles = StyleSheet.create({
    article: {
        fontSize: 89
    },
});