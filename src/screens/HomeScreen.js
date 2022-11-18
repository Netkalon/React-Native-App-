import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ( {navigation} ) => {

    return (
      <View style={styles.mainView}>
        <Text>Welcome to All</Text>
        
        <TouchableOpacity
          style={styles.touchableView}
          onPress={() => {
            navigation.navigate("Home_to_Details",{movie: {
              title:        "Star Wars",
              release:       1977
            }} )}}>
            <View>
              <Text style={styles.touchableText}>Star Wars</Text>
            </View>
        </TouchableOpacity>
            
        <TouchableOpacity
          style={styles.touchableView1}
          onPress={() => {
            navigation.navigate("Home_to_Details",{movie: {
              title:          "Black Panther",
              release:         2018
            }} )}}>
            <View>
              <Text style={styles.touchableText}>Black Panther</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.touchableView2}
          onPress={() => {
            navigation.navigate("Home_to_Details",{movie: {
              title:          "The Matrix",
              release:         1999
            }} )}}>
            <View>
              <Text style={styles.touchableText}>The Matrix</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableView: {
    marginBottom: 30,
    width: 150,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#e02aff',
    
  },
  touchableView1: {
    marginBottom: 30,
    width: 150,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#c12127',
    
  },
  touchableView2: {
    marginBottom: 30,
    width: 150,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#fb8817',
    
  },
  touchableText: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default HomeScreen;