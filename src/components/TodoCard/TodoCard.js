import React from 'react';
import {TouchableHighlight, Text, SafeAreaView} from 'react-native';
import styles from './TodoCard.styles';


const TodoCard = (props) => {


    return(
        <SafeAreaView>
           
           {!props.toDo.isDone ? (
        <TouchableHighlight
          style={styles.active_Todo}
          onPress={() => props.onChange(props.toDo.id)}
          onLongPress={() => props.onDelete(props.toDo.id)}>
          <Text style={styles.activeText}>{props.toDo.title}</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          style={styles.finished_Todo}
          onPress={() => props.onChange(props.toDo.id)}
          onLongPress={() => props.onDelete(props.toDo.id)}>
          <Text style={styles.finishedText}>{props.toDo.title}</Text>
        </TouchableHighlight>
      )}
        
        </SafeAreaView>
    )
} 


export default TodoCard;