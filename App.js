import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import LienAPI from './pages/lienApi'
import StoreData from './components/StoreData'
import GetData from './components/GetData'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {qrCode:" ",tab:[]};
    abc={"abcdef":"abcd"};
    
  }

 
  render(){
    /*console.log("constru")
    console.log(abc)
    StoreData(abc)
    console.log("end")
    //this.state.tab=GetData()
    GetData().then((data)=>{
      console.log("data")
      console.log(data)
    })
    console.log("tab")
    console.log(this.state.tab)*/
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/home2.jpg')} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.containerRow}>
            <Text style={styles.head}>GO STYLEE! </Text>
            <Text style={styles.head}>{this.props.route.params==undefined?"":this.props.route.params.data} </Text>
            <Button style={styles.qrCode} title='Get QRCode' onPress={()=>this.props.navigation.navigate('Camera')}>
            </Button>
          </View>
        </View>
        <Text style={styles.description}>Avec l'appli goStyle, scannez toutes vos promos goStyle {"\n"} puis retrouvez les dans la liste ci-dessous!!</Text>
        <View style={styles.compoList}>
        <LienAPI  qrCode={this.props.route.params==undefined?"":this.props.route.params.data}/>
        </View>
        <Image source={require('./src/goutelettes.gif')}></Image>
        <Image source={require('./src/goutelettes.gif')}></Image>
      </ImageBackground>
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

export default App