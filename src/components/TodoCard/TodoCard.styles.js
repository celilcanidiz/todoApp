import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    active_Todo:{
        padding:5,
        backgroundColor:'#7da453',
        borderRadius:5,
        padding:10,
        margin:5,
    },
    finished_Todo:{
        flex: 1,
        padding: 10,
        backgroundColor: '#36474f',
        borderRadius: 5,
        margin: 5,
    },
    activeText:{
        color: 'white',
    },
    finishedText:{
        color: '#798082', 
        textDecorationLine: 'line-through'
    }
})