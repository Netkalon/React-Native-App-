import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Demo = () => {
    return (
      <View style={styles.mainView}>
        <Text>Hi..</Text>
          <Button
            title="Go Home"
            onPress={() => {console.log("Go to Details")}}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Demo;