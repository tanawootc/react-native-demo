import React from 'react'

import {View,Text,Image,StyleSheet ,TouchableOpacity} from 'react-native'

const ListItem=({item})=>{
  return (
    <TouchableOpacity style={styles.listitem}>
        <View style={styles.listitemView}>
  <Text style={styles.listitemText}>{item.text}</Text>
        </View>
    </TouchableOpacity>
  )
}


const styles =StyleSheet.create({
 
})

export default ListItem;
