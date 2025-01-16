import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios, { spread } from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../themes/PokemonStyle'
import { PokemonDetails } from '../types/PokemonTypes';
import Icon  from 'react-native-vector-icons/Ionicons';

type Props = {}

type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string, url : string, id : number},
}

type PropsPokedex = NativeStackScreenProps<PokedexStackParamList, 'Pokemon'>;

const Pokemon = (props: PropsPokedex) => {
  /**
   * UseStates
   */
  const [data, setData] = useState<PokemonDetails>({} as PokemonDetails);
  const [sprites, setSprites] = useState<String[]>();
  
  /**
   * Other properties
   */
  const pokemon = props.route.params;

  useEffect(() => {
    fetchData();
  }, [pokemon.id]);


  useEffect(() => {
    getSprites();
  }, [data]);


  /**
   * Function to fetch the pokemon data from the api
   */
  const fetchData = async () => {
    const response = await axios.get(pokemon.url);
    let dataPkmn = response.data as PokemonDetails;
    setData(dataPkmn);
  }


  /**
   * Function to get the sprites of the pokemon
   */
  const getSprites = async () => {
    const auxSprites: string[] = [];

    const typeOfSprites : string []= [
      'front_default',
      'front_shiny',
      'back_default',
      'back_shiny',
      'front_female',
      'front_shiny_female',
      'back_female',
      'back_shiny_female',
    ]
  
    for (const key of typeOfSprites) {
      const spriteExists = data.sprites?.[key as keyof typeof data.sprites];
      if (spriteExists && typeof spriteExists=== 'string') {
        auxSprites.push(spriteExists);
      }
    }

    setSprites(auxSprites);  
  }
  
  
  return (
    <View style={styles.container}>
        <View>
          <Image
            source={
              { 
                uri: data.sprites?.other?.['official-artwork']?.front_default
                ? data.sprites.other['official-artwork'].front_default
                : data.sprites?.other?.home?.front_default,
              }
            }
            style={styles.mainImg} 
          />
        </View>
        <View>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        
        <Text>
            {data.weight/10} KG 
            <Icon name='arrow-forward-outline'/>
            {data.height/10} M
        </Text>

        <FlatList
            data={data.types}
            renderItem={({ item }) => (
                <Text style={styles.typeText}>{item.type.name} </Text>
            )}
            
            keyExtractor={(item, index) => item.type.name + index}
            horizontal
            style={styles.typeContainer}
          />
        
        <FlatList
            data={data.abilities}
            renderItem={({ item }) => (
                <Text style={styles.typeText}>{item.ability.name} </Text>
            )}
            keyExtractor={(item, index) => item.ability.name + index}
            horizontal
            style={styles.typeContainer}
            ItemSeparatorComponent={() => 
              <Icon name='ellipse' style={styles.separator} size={10}/>} 
          />
        
        <FlatList
          data={data?.stats}
          renderItem={({ item }) => (
            <View style={styles.statRow}>
              <Text style={styles.statName}>{item.stat.name}: </Text>
              <Text style={styles.statValue}> {item.base_stat}</Text>
            </View>
          )}
          keyExtractor={(item) => item.stat.name}
        />
        
        <Text style={styles.title}>Sprites of {pokemon.name}</Text>
          <FlatList
            data={sprites} 
            renderItem={({ item }) => (
              <View style={styles.spriteContainer}>
                <Image source={{ uri: item.trim() }} style={styles.spriteImage} />
              </View>
            )}
            keyExtractor={(item, index) => item+index.toString()}
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            style={styles.spriteRow}
          />       
    </View>
  )
}

export default Pokemon

