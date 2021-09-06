import React, { useRef, useState } from 'react'
//import styled from 'styled-components'
//import Button from '../../components/Button'
//import logoresearch from '../../img/logoResearch.png'
import logotrip from '../img/logoTrip.png'
import logouser from '../img/logoUser.png'
import { AppRegistry, Text, View, Image, StyleSheet, DrawerLayoutAndroid, Button, TouchableOpacity } from 'react-native'
//import Profile from '../pages/Profile.js'
//import ProfileSliderv2 from '../components/ProfileSliderv2'



/**
 * 
 * @returns 
 * 
 * <Image
          style={styles.tinyLogo}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
 */
            


 function Header({ navigation }) {

    
  return (
      <>
        <View style={styles.containerRow}>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigation.navigate('Home')}>
            <Image
                style={styles.tinyLogo}
                source={logotrip}
            />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigation.navigate('Profile')}>
                <Image
                    style={styles.EleRight}
                    source={logouser}
                />
            </TouchableOpacity>

        </View>
        
      </>
    
  );

  
}

/**
 * () => navigation.navigation.navigate('Profile')
 *  () => navigation.navigation.navigate('Profile')
 * 
 */
const styles = StyleSheet.create({
    containerRow: {
        justifyContent: 'space-between',

        flexDirection: 'row',
        backgroundColor: 'grey',

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    EleRight: {
        width: 50,
        height: 50,
    },
    rightSlider: {

        position: 'relative'


    }
  });

  export default Header

