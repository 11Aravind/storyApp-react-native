// import { View, Text } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AuthLoadingScreen from "./app/AuthLoadingScreen";
// import Home from "./app/components/Home"
// import Profile from "./app/components/Profile"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

// // Create a Stack Navigator
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const HomStack=()=>{
//   <Tab.Navigator
//     screenOptions={({ navigation, route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName = route.name === 'Dashboard' ? 'home' : 'person';
//         return <Icon name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveBackgroundColor: 'rgba(0,0,0,0.2)',
//       tabBarStyle: [
//         {
//           display: "flex"
//         },
//         null
//       ]
//     })}
//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Profile" component={Profile} />
//   </Tab.Navigator>
// }
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="AuthLoading">
//         <Stack.Screen
//           name="AuthLoading"
//           component={AuthLoadingScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="homestack"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import AuthLoadingScreen from "./app/AuthLoadingScreen";
import Home from "./app/components/Home";
import Profile from "./app/components/Profile";

// Create Stack Navigator and Tab Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = ''; // Default value

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          else{
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Home" component={Home}    />
      <Tab.Screen name="Profile" component={Profile}   />
      <Tab.Screen name="hello" component={Profile}   />   //
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthLoading">
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
