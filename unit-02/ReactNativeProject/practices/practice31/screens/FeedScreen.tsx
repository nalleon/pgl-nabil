import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native-gesture-handler';
import ArticleContext, { ArticlesContext } from '../context/ArticleContext';
type Props = {}

type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}


type FeedStackParamList = {
    FeedScreen: undefined,
    ArticleDetail: undefined,
}

type PropsFeed = NativeStackScreenProps<FeedStackParamList, 'FeedScreen'>;

const FeedScreen = (props: PropsFeed) => {

    /**
     * Other properties
     */
    const url = 'https://www.xataka.com/feedburner.xml';
    const context = useContext(ArticlesContext);


    /**
     * UseEffect
     */
    useEffect(() => {
        const check = checkAsyncStorage();
        console.log(check);
        if(!check){
            /**
             * Function to fetch the articles from the feed
             */
            const fetchFeed = async () => {
                try {
                    const response = await axios.get(url);
                    if(response.status === 200){
                        const parsed = await rssParser.parse(response.data);

                        const articlesData: Article[] = parsed.items.map((item): Article => ({
                            title: item.title || 'Untitled',
                            link: item.links?.[0]?.url || '#', 
                            id: item.id || 'Aa0',
                            description: item.description || 'No description available',
                        }));

                        context.setArticles([...articlesData]);
                        context.saveArticlesAsyncStorage(articlesData);
                    }
                } catch (error) {
                    console.error('Error fetching articles:', error);

                    const storageCache = await AsyncStorage.getItem('articles');
                    const storageCacheVisted = await AsyncStorage.getItem('vistedArticles');
                    context.setArticles(JSON.parse(storageCache ?? '[]') as Article[]);
                    context.setVisited(JSON.parse(storageCacheVisted ?? '[]') as string[]);
                    
                } 
            };
            fetchFeed();
        }

    }, []);


    /**
     * Function to check the asyncStorage
     */

    const checkAsyncStorage = async () =>{
        const articles = await AsyncStorage.getItem('articles');
        const visited  = await AsyncStorage.getItem('visited');

        if(articles && visited){
            context.setArticles(JSON.parse(articles));
            context.setVisited(JSON.parse(visited));
            return true;
        } else if(articles && !visited){
            context.setArticles(JSON.parse(articles));
            return true;
        } else {
            return false;
        }
    }

    /***
     * Function to handle the on press on an article
     */
    const handlePress = async (article : Article) => {
        const aux = [...context.visited, article.id];
        context.setVisited(aux);
        context.saveVisitedPagesAsyncStorage(aux);
        context.setCurrentArticle({...article});
        props.navigation.navigate('ArticleDetail');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={context.articles}
                keyExtractor={(item, index) => item.id+index}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handlePress(item)}
                        style={[
                            context.visited.includes(item.id) ? styles.visited : styles.articleContainer
                        ]}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    articleContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
    visited: {
        backgroundColor: '#e0e0e0',
    },
    debug:{
        color: 'red',
        marginBottom: 10,
    }
})