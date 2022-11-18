import React, {useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


const DetailsScreen = ( {navigation, route} ) => {
    const movie = route.params.movie;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', "http://www.omdbapi.com/?apikey=5965b084&t="+movie.title+"&y="+movie.release);
      xhr.send();
      xhr.onload = () => {
        if (xhr.status == 200){
          let response = JSON.parse(xhr.response);
          setMovieDetails(response);
      
        }else{
          console.log(`HTTP Request Failed ${xhr.status}`);
        }
      };
      

    }, []);


    
    
    return (
      <View style={styles.mainView}>
        <Text style={styles.viewText} >{
            (movieDetails == null ? "" : movieDetails.Title)
        }</Text>
        <Text style={styles.viewText}>{
           (movieDetails == null ? "" : movieDetails.Released)
        }</Text>
        <Text style={styles.viewText}>{
           (movieDetails == null ? "" : movieDetails.Plot)
        }</Text>

      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:5,
    backgroundColor: '#3f51b5',
    color: 'white'
  },
  viewText: {
    textAlign: 'center',
    padding:5,
    fontSize: 18,
    color: 'white'
  }
});

export default DetailsScreen;