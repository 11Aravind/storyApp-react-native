import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.black}>Home component</Text>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
  black:{
    color:'#000'
},
})