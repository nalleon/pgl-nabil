import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',  
    },

    box:{
        marginBlockStart: 5,
        marginBlockEnd: 5,
        marginInlineStart: 5,
        marginInlineEnd: 5,
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        borderColor: 'black',
        borderWidth: 2,
    },

    textTitle: {
        fontWeight:'bold',
        color: 'yellow',
        textAlign: 'center',
        fontSize: 20,
        marginVertical:5
    },

    mainContainer:{
        flex: 1,
        backgroundColor: 'grey',
        padding: 10
    },

});

export default styles;
