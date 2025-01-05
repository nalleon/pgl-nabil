import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import PersonCard from '../components/PersonCard'

type Props = {}

type Person = {
    id: number,
    name: string,
    heigth: number,
    weight: number,
}

const Practice17Screen = (props: Props) => {
    const [personList, setPersonList] = useState<Person[]>([]);

    useEffect(() => {

    }, [personList]);
    
    function addPerson () : void {  
        setPersonList([...personList, {} as Person]);
    };

    
    function modifyPerson (person : Person) : void {
        let arrAux = personList;
        arrAux[person.id-1] = person;
        setPersonList([...arrAux]);
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={{flex:1}}>
                <Text>IMC Calculator</Text>
                <TouchableOpacity onPress={() => addPerson()}>
                    <Text style={{textAlign:'center', borderRadius:50, borderColor:'black'}}>+</Text>
                </TouchableOpacity>
                    {personList.map((item, index) => (
                            <PersonCard key={index} 
                            modifyPerson={modifyPerson} person={item}/>
                        )
                    )}
            </View>        
        </SafeAreaView>
    )
}

export default Practice17Screen