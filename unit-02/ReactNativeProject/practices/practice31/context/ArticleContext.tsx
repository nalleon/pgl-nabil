import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
    children: React.ReactNode;
}

type ArticlesListContextType ={
    articles: Article[],
    setArticles: (articles: Article[]) => void,
    visited: string[],
    setVisited: (visited: string[]) => void,
    currentArticle: Article,
    setCurrentArticle: (article: Article) => void,
    saveArticlesAsyncStorage: (articles:Article[]) => Promise<void>,
    saveVisitedPagesAsyncStorage: (visited:string[]) => Promise<void>,
}

type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}

export const ArticlesContext = createContext<ArticlesListContextType>({} as ArticlesListContextType );

const ArticleContext = (props: Props) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [visited, setVisited] = useState<string[]>([]);
    const [currentArticle, setCurrentArticle] = useState<Article>({} as Article);


    /**
     * Function to save the asyncStorage
     */
    const saveArticlesAsyncStorage = async (articles: Article[]) => {
        try {
            await AsyncStorage.setItem('articles', JSON.stringify(articles));
        } catch (error) {
            console.log('Error saving data', error);
        }
    }

    /**
     * Function to save the asyncStorage
     */
        const saveVisitedPagesAsyncStorage = async (visited : string[]) => {
            try {
                await AsyncStorage.setItem('visited', JSON.stringify(visited));
            } catch (error) {
                console.log('Error saving data', error);
            }
        }
    
    

    const contextValues: ArticlesListContextType  = {
        articles,
        setArticles,
        visited,
        setVisited,
        currentArticle,
        setCurrentArticle,
        saveArticlesAsyncStorage,
        saveVisitedPagesAsyncStorage
    }

    
    return (
        <ArticlesContext.Provider value={contextValues}>
            {props.children}
        </ArticlesContext.Provider>
    )
}

export default ArticleContext

const styles = StyleSheet.create({})