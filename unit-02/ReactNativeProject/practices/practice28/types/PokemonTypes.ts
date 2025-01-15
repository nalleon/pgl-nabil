
export interface PokemonDetails {
abilities: Ability2[];
height: number;
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

export interface Type {
slot: number;
type: Ability;
}

export interface Stat {
base_stat: number;
effort: number;
stat: Ability;
}

export interface Sprites {
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

export interface Versions {
'generation-i': Generationi;
'generation-ii': Generationii;
'generation-iii': Generationiii;
'generation-iv': Generationiv;
'generation-v': Generationv;
'generation-vi': Generationvi;
'generation-vii': Generationvii;
'generation-viii': Generationviii;
}

export interface Generationviii {
icons: Dreamworld;
}

export interface Generationvii {
icons: Dreamworld;
'ultra-sun-ultra-moon': Home;
}

export interface Generationvi {
'omegaruby-alphasapphire': Home;
'x-y': Home;
}

export interface Generationv {
'black-white': Blackwhite;
}

export interface Blackwhite {
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

export interface Generationiv {
'diamond-pearl': Showdown;
'heartgold-soulsilver': Showdown;
platinum: Showdown;
}

export interface Generationiii {
emerald: Officialartwork;
'firered-leafgreen': Fireredleafgreen;
'ruby-sapphire': Rubysapphire;
}

export interface Rubysapphire {
back_default: string;
back_shiny: string;
front_default: string;
front_shiny: string;
}

export interface Fireredleafgreen {
back_default: null;
back_shiny: null;
front_default: null;
front_shiny: null;
}

export interface Generationii {
crystal: Crystal;
gold: Gold;
silver: Gold;
}

export interface Gold {
back_default: string;
back_shiny: string;
front_default: string;
front_shiny: string;
front_transparent: string;
}

export interface Crystal {
back_default: string;
back_shiny: string;
back_shiny_transparent: string;
back_transparent: string;
front_default: string;
front_shiny: string;
front_shiny_transparent: string;
front_transparent: string;
}

export interface Generationi {
'red-blue': Redblue;
yellow: Redblue;
}

export interface Redblue {
back_default: null;
back_gray: null;
back_transparent: null;
front_default: null;
front_gray: null;
front_transparent: null;
}

export interface Other {
dream_world: Dreamworld;
home: Home;
'official-artwork': Officialartwork;
showdown: Showdown;
}

export interface Showdown {
back_default: string;
back_female: null;
back_shiny: string;
back_shiny_female: null;
front_default: string;
front_female: null;
front_shiny: string;
front_shiny_female: null;
}

export interface Officialartwork {
front_default: string;
front_shiny: string;
}

export interface Home {
front_default: string;
front_female: null;
front_shiny: string;
front_shiny_female: null;
}

export interface Dreamworld {
front_default: string;
front_female: null;
}


export interface Versiondetail {
rarity: number;
version: Ability;
}

export interface Ability2 {
ability: Ability;
is_hidden: boolean;
slot: number;
}

export interface Ability {
name: string;
url: string;
}