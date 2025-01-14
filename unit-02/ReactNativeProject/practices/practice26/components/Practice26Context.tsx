import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

type Props = {
    children: React.ReactNode;
}

type PetListContextType ={
    cats: Pet[],
    dogs: Pet[],
    setCats: (cats: Pet[]) => void,
    setDogs: (dogs: Pet[]) => void,
}

type Pet = {
    breed: string,
    img: string,
    description: string,
}


export const PetsContext = createContext<PetListContextType >({} as PetListContextType );

const Practice26Context = (props: Props) => {
    const defaultCats: Pet[] = [
        {
        breed: 'Persian',
        img: 'https://www.thesprucepets.com/thmb/qP6SYSoepyKZaDzJKcRDPB1yDV4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/50122757_393198351489429_2336461074070557448_n-5c4cf69f46e0fb00014a2b9f.jpg',
        description: 'description',
        },
        {
        breed: 'Siamese',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesprucepets.com%2Fthmb%2F_nHqoWVVwDSkPlqKI9gbDay5jI0%3D%2F4608x3072%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fclose-up-portrait-of-cat-901825714-5c8bf4a9c9e77c00010e967d.jpg&f=1&nofb=1&ipt=48469c26499d981a3a3386736c026fbe223e7526d677f817a482015fe000a63d&ipo=images',
        description: 'description.',
        },
    ];
    
    const defaultDogs: Pet[] = [
        {
        breed: 'Cocker Spaniel',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bNi4LCFptV9eTLTSon8O5AHaFt%26pid%3DApi&f=1&ipt=3be1716aeb3370eaeac6166f37c1c27c990851b77d5785935888ae2a2182570e&ipo=images',
        description: 'description',
        },
        {
        breed: 'Labrador Retriever',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesprucepets.com%2Fthmb%2FET8IKk28ByTK3zgXiKMxu1OlKH0%3D%2F4984x3323%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F1_BlackPuppy-5ba50070c9e77c0082221c54.jpg&f=1&nofb=1&ipt=5456579b76b4fbfbfa619da87faf69f91376dc4bd43e724f74ffb41d5103d509&ipo=images',
        description: 'description',
        },
    ];
    
    const [cats, setCats] = useState<Pet[]>(defaultCats);
    const [dogs, setDogs] = useState<Pet[]>(defaultDogs);


    const contextValues: PetListContextType  = {
        cats: cats,
        dogs: dogs,
        setCats: setCats,
        setDogs: setDogs
    }

    
    return (
        <PetsContext.Provider value={contextValues}>
            {props.children}
        </PetsContext.Provider>
    )
}

export default Practice26Context

const styles = StyleSheet.create({})