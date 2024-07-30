import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');
const cardWidth = 300;
// import Images from "@asset/images"
const Profile = ({ navigation }) => {
  return (
    <View>
      <View style={styles.picContainer}>
        <Image
          source={require('../asset/images/pic.png')}
          style={styles.image}
        />
        <Text style={styles.profilename}>Asif M</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.Maincard}>
        <Text style={styles.black}>Profile</Text>
          <View style={styles.row}>
            <Icon name="sign-out" size={30}  color="#000" />
            <Text style={styles.black}>Logout</Text>
          </View>
          <View style={styles.row}>
            <Icon name="sign-out" size={30}  color="#000" />
            <Text style={styles.black}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
    // <View>
    //   <Text>Profile</Text>
    //   <Button 
    //   title='Logout'
    //   onPress={()=>navigation.navigate('AuthLoading')}
    //   />
    // </View>
  )
}

export default Profile
const styles = StyleSheet.create({
  containerProfile: {

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    height: 50,
    borderRadius: 1,
    
    // Elevation for Android
    elevation: .5, // A light shadow

    // Shadow properties for iOS
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // S
  },
  
  black:{
      color:'#000',
  },
  cardContainer: {
    position: 'relative'
  },
  Maincard: {
    width: cardWidth,
    marginLeft: (width - cardWidth) / 2,
    marginRight: (width - cardWidth) / 2,
    backgroundColor: '#fff',
    height: (height - 250),
    top: -30,
    position: 'absolute',
    borderRadius: 8
  },
  picContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    width: '100%',
    backgroundColor: '#007BFF'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profilename: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'sans-serif'
  }

})