import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios, { spread } from 'axios';
import { FlatList } from 'react-native-gesture-handler';

type Props = {}

type PokemonType = {
    name: string;
    url: string;
    id: number;
}

type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string, url : string, id : number},
}

type PropsPokedex = NativeStackScreenProps<PokedexStackParamList, 'Pokemon'>;

interface PokemonDetails {
  abilities: Ability2[];
  height: number;
  held_items: Helditem[];
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: Other;
  versions: Versions;
}

interface Versions {
  'generation-i': Generationi;
  'generation-ii': Generationii;
  'generation-iii': Generationiii;
  'generation-iv': Generationiv;
  'generation-v': Generationv;
  'generation-vi': Generationvi;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}

interface Generationviii {
  icons: Dreamworld;
}

interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

interface Generationvi {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
}

interface Generationv {
  'black-white': Blackwhite;
}

interface Blackwhite {
  animated: Showdown;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface Generationiv {
  'diamond-pearl': Showdown;
  'heartgold-soulsilver': Showdown;
  platinum: Showdown;
}

interface Generationiii {
  emerald: Officialartwork;
  'firered-leafgreen': Fireredleafgreen;
  'ruby-sapphire': Rubysapphire;
}

interface Rubysapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Fireredleafgreen {
  back_default: null;
  back_shiny: null;
  front_default: null;
  front_shiny: null;
}

interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Generationi {
  'red-blue': Redblue;
  yellow: Redblue;
}

interface Redblue {
  back_default: null;
  back_gray: null;
  back_transparent: null;
  front_default: null;
  front_gray: null;
  front_transparent: null;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
  showdown: Showdown;
}

interface Showdown {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface Dreamworld {
  front_default: string;
  front_female: null;
}



interface Helditem {
  item: Ability;
  version_details: Versiondetail[];
}

interface Versiondetail {
  rarity: number;
  version: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}
const Pokemon = (props: PropsPokedex) => {
  const [data, setData] = useState<PokemonDetails>({} as PokemonDetails);
  const [sprites, setSprites] = useState<String[]>();
  const pokemon = props.route.params;

  useEffect(() => {
    fetchData();
  }, [pokemon.id]);


  useEffect(() => {
    getSprites();
  }, [pokemon.id]);

  const fetchData = async () => {
    const response = await axios.get(pokemon.url);
    let dataPkmn = response.data as PokemonDetails;
    setData(dataPkmn);
  }


  const getSprites = async () => {
    const auxSprites: string[] = [];
  
    if (data.sprites?.front_default) {
      auxSprites.push(data.sprites.front_default);
    }
    if (data.sprites?.front_shiny) {
      auxSprites.push(data.sprites.front_shiny);
    }
    if (data.sprites?.back_default) {
      auxSprites.push(data.sprites.back_default);
    }
    if (data.sprites?.back_shiny) {
      auxSprites.push(data.sprites.back_shiny);
    }
    if (data.sprites?.front_female) {
      auxSprites.push(data.sprites.front_female);
    }
    if (data.sprites?.front_shiny_female) {
      auxSprites.push(data.sprites.front_shiny_female);
    }
    if (data.sprites?.back_female) {
      auxSprites.push(data.sprites.back_female);
    }
    if (data.sprites?.back_shiny_female) {
      auxSprites.push(data.sprites.back_shiny_female);
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
        
        <FlatList
            data={data.types}
            renderItem={({ item }) => (
                <Text style={styles.typeText}>{item.type.name} </Text>
            )}
            keyExtractor={(item, index) => item.type.name + index}
            horizontal
          />
        <View style={styles.statsContainer}>
          {data?.stats && data.stats.length > 0 ? (
            <View>
              <Text style={styles.statText}>HP: {data.stats[0]?.base_stat}</Text>
              <Text style={styles.statText}>ATK: {data.stats[1]?.base_stat}</Text>
              <Text style={styles.statText}>DEF: {data.stats[2]?.base_stat}</Text>
              <Text style={styles.statText}>SPATK: {data.stats[3]?.base_stat}</Text>
              <Text style={styles.statText}>SPDEF: {data.stats[4]?.base_stat}</Text>
              <Text style={styles.statText}>SPD: {data.stats[5]?.base_stat}</Text>
            </View>
          ) : (
            <Text style={styles.statText}>Loading stats...</Text>
          )}
        </View>

        <Text style={styles.title}>Sprites of {pokemon.name}</Text>
          <FlatList
            data={sprites} 
            renderItem={({ item, index }) => (
              <View style={styles.spriteContainer}>
                <Image source={{ uri: item.trim() }} style={styles.spriteImage} />
              </View>
            )}
            keyExtractor={(item, index) => item+index.toString()}
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
          />       
    </View>
  )
}

export default Pokemon

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainImg:{
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#008080',
    borderWidth:3
  },
  title:{
    textTransform: 'uppercase',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008080'
  },
  typeContainer: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#008080',
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
  },
  typeText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statsContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#008080',
    shadowColor: '#000',
  },
  statText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  spriteContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#008080',
    borderRadius: 4,
  },
  spriteImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})