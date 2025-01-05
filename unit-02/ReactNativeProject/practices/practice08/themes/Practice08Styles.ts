import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',  
    },

    circle:{
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center"
    },

    mainContainer:{
        flex: 1,
        backgroundColor: 'grey',
        padding: 10
    },

    defaultStyle :{
        backgroundColor: 'lightblue',
        borderColor: 'black',
        borderWidth: 2,
    },
    
    btncircle:{
        padding: 10,
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
        marginBottom: 10
    },

    btnrow:{
        backgroundColor: 'orange',
        width: 300,
        height: 50,
        borderRadius: 25,
        marginBottom: 10
    }, 

    circleText: {
        color: "black",
        fontSize: 12,
    }


});

export default styles;
