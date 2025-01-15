import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
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

type SearchPokedexStackParamList = {
  SearchPokedex: undefined,
  Pokemon: {name : string, url: string, id : number},
}

type PropsSearchPokedex = NativeStackScreenProps<SearchPokedexStackParamList, 'SearchPokedex'>;

const SearchPokemon = (props: PropsSearchPokedex) => {
  const [pokemonMatching, setPokemonMatching] = useState<PokemonType[]>([]);
  
  const uri: string = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=99"

  useEffect(() => {

  }, [pokemonMatching]);

  const searchForPokemon = async (search: string) => {
    const response = await axios.get(uri);
    let list = response.data as PokedexType

    const aux = list.results.map((pokemon) => {
        const urlParts = pokemon.url.split('/');
        const id = urlParts[urlParts.length - 2]; 
        
        return { ...pokemon, id: Number(id) }; 
    });

    setPokemonMatching(
      aux.filter(
        (pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );

  }


  return (
    <View style={styles.container}>
      <TextInput placeholder='Search for a pokemon' onChangeText={searchForPokemon} style={styles.textInput}></TextInput>
      <FlatList
          data={pokemonMatching}
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

export default SearchPokemon
