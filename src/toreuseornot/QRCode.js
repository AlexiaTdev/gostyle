import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {   Button, StyleSheet, Text, View } from 'react-native';


class QRCode extends React.Component{
  constructor(props){
    super(props);
    this.state = {qrCode:" "};
  }

  componentDidMount(){
    //const qrCode= this.props.route.params.data;
    

    this.setState({qrCode:"q"});
  }

  render(){
  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.containerRow}>
            <Text style={styles.head}>GO STYLEE! </Text>
            <Text style={styles.head}>{this.props.route.params.data?this.props.route.params.data:"1"} </Text>
            <Button style={styles.qrCode} title='Get QRCode' onPress={()=>this.props.navigation.navigate('Camera')}>
            </Button>
          </View>
        </View>
        <View style={styles.compoList}>
        </View>
        
    </View>
  )
  }
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
    width: '30%'
  },
  compoList: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
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
export default QRCode