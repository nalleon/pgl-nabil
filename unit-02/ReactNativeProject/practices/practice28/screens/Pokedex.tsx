import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
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

        const aux = list.results.map((pokemon) => {
            const urlParts = pokemon.url.split('/');
            const id = urlParts[urlParts.length - 2]; 
            
            return { ...pokemon, id: Number(id) }; 
        });

        setPokedex(aux);
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={pokedex}
                renderItem={(pokemon) => {
                    return (
                        <View key={pokemon.index} style={styles.item}>
                            <TouchableOpacity onPress={() => props.navigation.navigate
                                    ('Pokemon',
                                        {   name: pokemon.item.name, 
                                            url: pokemon.item.url, id: pokemon.item.id 
                                        }
                                    )
                                }
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
                        </View>
                        )
                        }}
                keyExtractor={(pokemon, index) => pokemon.name + index}
            />
                
        </View>
    )
}

export default Pokedex


