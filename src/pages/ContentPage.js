import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
//import LienAPI from '../../pages/lienApi'
/** */


class ContentPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {qrCode:" "};
  }

 
  render(){
  return (
    <View style={styles.container}>
        <Text>ContentPage</Text>
    </View>
  )
  }
}

//<LienAPI  qrCode={this.props.route.params==undefined?"":this.props.route.params.data}/>
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
    width: '30%'
  },
  compoList: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10%',
  },
  description: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '10%',
  }
  
});

export default ContentPage