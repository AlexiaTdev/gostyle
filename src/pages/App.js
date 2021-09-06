import { StatusBar } from 'expo-status-bar';
import React, { Component, useRef } from 'react';
import { Image, ImageBackground, Button, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'
import RandomViews from '../components/RandomViews'
import home from '../img/homev3.png'
import Home from '../pages/Home'



class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {

    return (
      
          <Home navigation={this.props}/>

    );
  }
}

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

export default App