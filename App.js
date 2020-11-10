import React,{useState} from 'react'
import {View,Text,FlatList,Image,StyleSheet} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import uuid from 'uuid-random'

const App=()=>{

  const [items,setItems]=useState([
    {id:uuid(),text:'HTML'},
    {id:uuid(),text:'PDF'},
    {id:uuid(),text:'JS'},
  ])

  return (
    <View style={styles.container}>
      <Header title="MyBook"/>
      <FlatList data={items} 
        renderItem={
          ({item})=> <ListItem item={item}/>
          } />
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    flex:1,
    paddingTop:0,
  }
})

export default App;

/*
 <FlatList data={items} 
        renderItem={
          ({item})=><Text>{item.text}</Text>
          } />
*/