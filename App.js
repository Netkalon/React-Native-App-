import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import Demo from "./src/screens/Demo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
        screenOptions={
          {
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#ff4b01'}
          }
        }>
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{
            title: "React Native Demo",
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }}
        />
        <Stack.Screen
          name="Home_to_Details"
          component={DetailsScreen}
          options={ ( {route}) => ({title: route.params.movie.title})}
        />
      
        <Stack.Screen
          name="Home1"
          component={Demo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#270deg',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
