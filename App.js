import React from 'react'
import Header from './components/Header'
import {View,Text,Image,StyleSheet} from 'react-native'

const App=()=>{
  return (
    <View style={styles.container}>
      <Header title="MyBook"/>
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
