import React , {useState} from 'react';
import {TextInput, View, TouchableHighlight, Text} from 'react-native';
import styles from './TodoAdd.styles';

const TodoAdd = (props) => {

  const [change, setChange] = useState(true);
  const inputChange = text => {
    text === '' ? setChange(true) : setChange(false);
    setToDoValue(text);
  };
  const [toDoValue, setToDoValue] = useState('');
    return(
<View style={styles.container}> 
    
        <TextInput style={styles.input_container}
        placeholder="Yapılacak.." onChangeText={inputChange} value={toDoValue}
        />
     
     {change ? (
        <TouchableHighlight
          style={styles.button_null}
          onPress={props.onSave}
          disabled={true}>
          <Text style={styles.inputtext}>Kaydet</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          style={styles.button_active}
          onPress={() => props.onSave(toDoValue)}>
          <Text style={styles.inputtext}>Kaydet</Text>
        </TouchableHighlight>
      )}
</View>
  
    )
} 


export default TodoAdd;