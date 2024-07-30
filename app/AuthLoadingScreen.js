// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Text,
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon set you want

// export default class AuthLoadingScreen extends Component {
//   render() {
//     const { navigation } = this.props; // Destructure navigation from props
//     return (
//       <View style={styles.container}>
//         <Icon name="person" size={40} color="#000" />
//         <Text style={styles.heading}>Login</Text>
//         <View style={styles.inputContainer}>
//           <Text style={styles.labels}>Username</Text>
//           <TextInput
//             style={styles.inputBox}
//             placeholder="Enter username"
//           />
//           <Text style={styles.labels}>Password</Text>
//           <TextInput
//             secureTextEntry={true}
//             style={styles.inputBox}
//             placeholder="Enter password"
//           />
//         </View>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={() => navigation.navigate('Home')} // Use navigation here
//         >
//           <Text style={styles.btnText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('AuthLoadingScreen', () => AuthLoadingScreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   btn: {
//     width: '80%', // Adjust the width as needed
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   inputBox: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     // width: 200,
//   },
//   labels: {
//     color: '#000',
//   },
//   heading: {
//     color: '#007BFF',
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: '80%', // Adjust the width as needed
//     justifyContent: 'flex-start',
//   },
// });
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon set you want

export default class AuthLoadingScreen extends Component {
  render() {
    const { navigation } = this.props; // Destructure navigation from props
    return (
      <View style={styles.container}>
        <Icon name="user" size={40} color="#000" />
        <Text style={styles.heading}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Username</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter username"
          />
          <Text style={styles.labels}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputBox}
            placeholder="Enter password"
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('HomeStack')} // Navigate to HomeStack
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btn: {
    width: '80%', // Adjust the width as needed
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    // width: 200,
  },
  labels: {
    color: '#000',
  },
  heading: {
    color: '#007BFF',
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%', // Adjust the width as needed
    justifyContent: 'flex-start',
  },
});
