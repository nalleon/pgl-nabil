import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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


/**
 * https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
 * @param props 
 * @returns 
 */
const Pokedex = (props: PropsPokedex) => {
    const [pokedex, setPokedex] = useState<PokemonType[]>([]);
    const uri: string = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=99"

    useEffect(() => {
        fetchPokemon(uri)
    }, []);

    /**
     * Async function to fetch pokemon card from the api
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

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    item: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#eeeeee',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        textAlign: 'center',
        alignItems: 'center',  
        justifyContent: 'center',    
        flex: 1,
    },

    text: {
        fontSize: 17,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
    },

    sprite: {
        width: 30,
        height: 40,
        alignSelf: 'center',  
    },
});
