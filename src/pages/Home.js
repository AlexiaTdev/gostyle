import { StatusBar } from 'expo-status-bar';
import React, { Component, useRef } from 'react';
import { Image, ImageBackground, Button, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'
import RandomViews from '../components/RandomViews'
import home from '../img/homev3.png'


//import LienAPI from '../../pages/lienApi'
/** */



class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
 
  render(){

  return (
    <View style={styles.containerBasic}>

      <ImageBackground source={home} resizeMode="cover" style={styles.image}>
        <Header navigation={this.props} style={styles.header}/>

        <SearchBar navigation={this.props}/>
        <RandomViews navigation={this.props}/>
      </ImageBackground>

    </View>
  )
  }
}

/***
 * <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>

    const image = { uri: "https://reactjs.org/logo-og.png" };
 * 
 */

//style={styles.container}         
//<LienAPI  qrCode={this.props.route.params==undefined?"":this.props.route.params.data}/>
const styles = StyleSheet.create({
  containerBasic: {
    flex: 1,
    flexDirection: 'column',
    flexWrap:'wrap',
    paddingTop: StatusBar.currentHeight,

  },
  containerCentered: {
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  header: {

  },
  rightSlider: {

    position: 'relative'


}
  
  
});

/**    zIndex: 12,
    position: 'absolute' */

export default Home