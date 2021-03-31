/* 
** View du menu principal.
** Elle permet d'accéder aux autres page de l'application
** Elle affiche également le dernier code scanner et permet de l'ajouter à la liste de nos codes promos
*/

import React from 'react';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import GetPromos from '../components/GetPromos'


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {qrCode:""};
  }

 
  render(){

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../src/img/homeBackground.jpg')} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.containerRow}>
              <Text style={styles.head}>GO STYLEEE! </Text>
              <Text style={styles.head}>{this.props.route.params==undefined?"":this.props.route.params.data} </Text>
              <Button style={styles.qrCode} title='Get QRCode' onPress={()=>this.props.navigation.navigate('Camera')} />
              <Button style={styles.qrCode} title='Voir liste' onPress={()=>this.props.navigation.navigate('ListCode')} />            
            </View>
          </View>
          <Text style={styles.description}>Avec l'appli goStyle, scannez toutes vos promos goStyle {"\n"} puis retrouvez les dans la liste ci-dessous!!</Text>
          <View style={styles.compoList}>
          <GetPromos  qrCode={this.props.route.params==undefined?"":this.props.route.params.data}/>
          </View>
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

export default Home