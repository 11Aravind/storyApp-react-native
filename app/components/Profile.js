import { View, Text,Button } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button 
      title='Logout'
      onPress={()=>navigation.navigate('AuthLoading')}
      />
    </View>
  )
}

export default Profile