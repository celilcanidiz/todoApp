import React, {useState, useEffect} from 'react';
import TodoCard from './components/TodoCard';
import TodoAdd from './components/TodoAdd';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';



const App = () => {
  const [counter, setCounter] = useState(0);
  const [toDo, setToDo] = useState([]);

  function fixCounter() {
    let count = 0;
    toDo.forEach(item => (!item.isDone ? count++ : {}));
    setCounter(count);
  }
  useEffect(fixCounter, [toDo]);

  function addToDo(text) {
    const newToDo = {
      id: Date.now(),
      title: text.toString(),
      isDone: false,
    };
    setToDo([...toDo, newToDo]);
  }

  const changeStatus = changedtoDo => {
    const newToDo = toDo.map(item => {
      if (item.id === changedtoDo) {
        if (item.isDone) {
          return {...item, isDone: false};
        } else {
          return {...item, isDone: true};
        }
      }
      return item;
    });
    setToDo(newToDo);
  };
  function deleteToDo(id) {
    const newToDo = toDo;
    var index = newToDo.indexOf(id);
    newToDo.splice(index, 1);
    setToDo(newToDo);
  }
  const renderToDo = ({item}) => (
    <TodoCard toDo={item} onChange={changeStatus} onDelete={deleteToDo} />
  );

  return (
    <SafeAreaView style={styles.container}> 
  <View style={styles.inner_container}>
  <View style={styles.header_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
          <FlatList    
         style={styles.flat_list}
        data={toDo}
        renderItem={renderToDo}
        keyExtractor={item => item.id}
          />
    <View>
        <TodoAdd onSave={addToDo}/>
    </View>
</View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#102027',
    
  },
  inner_container:{
    flex:1,
   flexDirection:'column',
    justifyContent:'space-between',
  },
  header_container:{
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 35, 
    flex: 1, 
    color: '#fea500'},
  counter: {
    fontSize: 35, 
    marginRight: 5, 
    color: '#fea500'},

})

export default App;
