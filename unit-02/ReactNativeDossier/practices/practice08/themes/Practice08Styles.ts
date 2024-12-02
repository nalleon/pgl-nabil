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
        borderRadius: 50,
        backgroundColor: 'lightblue',
        borderColor: 'black',
        borderWidth: 2,
        textAlign: 'center',
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

    button: {
        backgroundColor: 'lightyellow',
        borderColor: 'black',
    },

    defaultStyle :{
        backgroundColor: 'lightblue',
        borderColor: 'black',
        borderWidth: 2,
    },
    
    btncircle:{
        backgroundColor: 'blue',
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnwrap:{
        backgroundColor: 'red',
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnrow:{
        backgroundColor: 'orange',
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }


});

export default styles;
