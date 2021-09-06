import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, ImageBackground, Button, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header'
//import LienAPI from '../../pages/lienApi'
/** */


class Profile extends React.Component{
  constructor(props){
    super(props);
  }

 
  render(){
  return (
    <View style={styles.container}>
        <Header/>
        <Text>Profile page</Text>
    </View>
  )
  }
}

//<LienAPI  qrCode={this.props.route.params==undefined?"":this.props.route.params.data}/>
const styles = StyleSheet.create({
 
  
});

export default Profile