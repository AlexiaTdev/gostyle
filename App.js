import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import ListComponent from './components/ListComponent.js'



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/home2.jpg')} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.containerRow}>
            <Text style={styles.head}>GO STYLE! </Text>
            <Button style={styles.qrCode} title='Get QRCode'></Button>
          </View>
        </View>
        <View style={styles.compoList}>
          <ListComponent />
        </View>
        
        <Image source={require('./src/goutelettes.gif')}  style={styles.gifdefeu}></Image>
        <Image source={require('./src/goutelettes.gif')}  style={styles.gifdefeudroite}></Image>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%'
  },
  head: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  qrCode: {
    width: '200px'
  },
  compoList: {
    flex: 1,
    width: '60%',
    alignItems: 'center',
  },
  gifdefeu: {
    flex: 1,
    justifyContent: "center",
    width: '200px',
  },
  gifdefeudroite: {
    alignItems: 'right',
    flex: 1,
    width: '200px',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10%',
  }

  
});

/**
 *         
 * resizeMode: "cover", 
 *     <StatusBar style="auto" />
 * 
 * const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
  head: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  qrCode: {
    width: '20px'
  }
  
});
*/
