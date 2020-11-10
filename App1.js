import React from 'react'

import {View,Text,Image,StyleSheet} from 'react-native'

const App=()=>{
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello 121</Text>
        <Image style={styles.image} source={{uri:'https://www.thaiticketmajor.com/variety/img_news/title/original1/0582/12582/title_ttmnews_12582-20200115164818.jpg'}} 
        />
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'red',
    fontSize:30,
  },
  image:{
    width:100,
    height:100,
    borderRadius:100/2,
  }
})

export default App;

/*
 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'blue',fontSize:30}}>Hello ...</Text>
    </View>
*/