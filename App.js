import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/home2.jpg')} style={styles.image}>
        <Text>GO STYLE!</Text>
        <Button>Get QRCode</Button>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

/**resizeMode: "cover", 
 *     
*/
