import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native-gesture-handler';
type Props = {}

type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}


type FeedStackParamList = {
    FeedScreen: undefined,
    ArticleDetail: {article : Article},
}

type PropsFeed = NativeStackScreenProps<FeedStackParamList, 'FeedScreen'>;

const FeedScreen = (props: PropsFeed) => {
    /**
     * UseStates
     */
    const [articles, setArticles] = useState<Article[]>([]);
    const [visited, setVisited] = useState<string[]>([]);

    /**
     * Other properties
     */
    const url = 'https://www.xataka.com/feedburner.xml';


    /**
     * UseEffect
     */
    useEffect(() => {
        const check = checkAsyncStorage();
        if(!check){
            fetchFeed();
        }
    }, []);


    /**
     * Function to check the asyncStorage
     */

    const checkAsyncStorage = async () =>{
        const articles = await AsyncStorage.getItem('articles');
        const visited  = await AsyncStorage.getItem('visited');

        if(articles  && visited){
            setArticles(JSON.parse(articles));
            setVisited(JSON.parse(visited));
            return true;
        } else if(articles && !visited){
            setArticles(JSON.parse(articles));
            return true;
        } else {
            return false;
        }

    }
    /**
     * Function to fetch the articles from the feed
     */
    const fetchFeed = async () => {
    try {
        const response = await axios.get(url);
        const parsed = await rssParser.parse(response.data);

        const articlesData = parsed.items.map((item) => ({
            title: item.title,
            link: item.links[0].url,
            id: item.id,
            description: item.description,
        }));

        setArticles(articlesData);
        await AsyncStorage.setItem('articles', JSON.stringify(articlesData));

        } catch (error) {
            console.error('Error fetching articles:', error);
            const storageCache = await AsyncStorage.getItem('articles');

            if (storageCache) {
                setArticles(JSON.parse(storageCache));
            }
        } 
    };

    /***
     * Function to handle the on press on an article
     */
    const handlePress = async (article : Article) => {
        let aux : string[] = visited;
        aux.push(article.id);
        setVisited([...aux]);
        await AsyncStorage.setItem("visited", JSON.stringify(aux));
        props.navigation.navigate('ArticleDetail', { article });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handlePress(item)}
                        style={[
                            visited.includes(item.id) ? styles.visited : styles.articleContainer
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
})