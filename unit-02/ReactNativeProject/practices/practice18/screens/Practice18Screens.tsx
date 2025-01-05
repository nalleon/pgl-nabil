
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
type Props = {}

const Practice18Screens = (props: Props) => {
    const [inputContent, setInputContent] = useState<String>("");
    const [history, setHistory] = useState<String[]>([]);
    const emojis : string[] = [':-(',':-)'];    

    function handlePress(){
        let aux = inputContent +  "-- " + Date.now();
        setInputContent(aux);
        setHistory([...history, inputContent ]);
        setInputContent("");
    }
    
    function checkContents(value : String) : number{
        if (value.includes(emojis[0])){
            return 1;
        } 

        if (value.includes(emojis[1])){
            return -1;
        }

        return 0;
    }

    return (
        <View>
            <TextInput placeholder='Insert any text' onChangeText={(e) => setInputContent(e)}/>
            <Button title="Submit" onPress={handlePress}/>

            {
                history.map((item, index) => (
                    <View>
                    { checkContents(item) === 1 &&
                        <View>
                            <Text key={index}>{item}</Text>
                            <Icon name="sad-outline" size={50}></Icon>
                        </View>
                    }
                    { checkContents(item) === -1 &&
                        <View>
                            <Text key={index}>{item}</Text>
                            <Icon name="happy-outline" size={50}></Icon>
                        </View>
                    }
                    { checkContents(item) === 0 &&
                        <Text key={index}>{item}</Text>
                    }

                    </View>
                    
                ))
            }
        </View>
    )
}

export default Practice18Screens

const styles = StyleSheet.create({})