import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    mainContainer:{
        flex: 1,
        backgroundColor: 'grey',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap'
    },

    container: {
        flex: 1,
        backgroundColor: 'lightgrey',  
        margin: 10,
    },

    input:{
        width: "90%",
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: "white"
    },

    img: {
        minWidth: 50,
        maxWidth: 100,
        resizeMode: 'contain',
        height: 50,
    }



});

export default styles;


