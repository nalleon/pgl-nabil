import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../themes/PokedexStyle'

type Props = {}


type PokedexType = {
    results: PokemonType[];
}

type PokemonType = {
    name: string;
    url: string;
    id: number;
}

type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string, url : string, id : number},
}

type PropsPokedex = NativeStackScreenProps<PokedexStackParamList, 'Pokedex'>;



const Pokedex = (props: PropsPokedex) => {
    /**
     * UseStates
     */
    const [pokedex, setPokedex] = useState<PokemonType[]>([]);

    /**
     * Other properties
     */
    const uri: string = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=99"

    useEffect(() => {
        fetchPokemon(uri)
    }, []);

    /**
     * Async function to fetch list of pokemon from the api
     * @param url of the api
     */
    async function fetchPokemon(url: string) {
        const response = await axios.get(url);
        let list = response.data as PokedexType

        const aux = list.results.map((pokemon) => ({
            ...pokemon,
            id: Number(pokemon.url.split('/').at(-2)), 
        }));

        setPokedex(aux);
    }


    return (
            <FlatList
                data={pokedex}
                renderItem={(pokemon) => {
                    return (
                            <TouchableOpacity onPress={() => props.navigation.navigate
                                    ('Pokemon',
                                        {   name: pokemon.item.name, 
                                            url: pokemon.item.url, id: pokemon.item.id 
                                        }
                                    )
                                }
                                style={styles.item}
                                >
                                <View>
                                    <Text style={styles.text}>{pokemon.item.name}</Text>
                                </View>
                                <View>
                                    <Image
                                        source={
                                            { 
                                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.item.id}.png` 
                                            }
                                        }
                                        style={styles.sprite}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                        }}
                keyExtractor={(pokemon, index) => pokemon.name + index}
                style={styles.container}
            />
    )
}

export default Pokedex


