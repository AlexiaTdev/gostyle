import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { render } from 'react-dom';
import GetData from '../components/GetData'





export default function AffichageCode({list}){
    console.log("listlist")
    console.log(list)
    console.log("listlist")
    return (        
        <View style={styles.container}>
            <Text  style={styles.itemTitle}>Liste des promos</Text>
            
            {list==undefined?  <Text  style={styles.item}></Text>:list.map((l) => (
            <View style={styles.container}>
                <Text  style={styles.item}>{l.codePromo}</Text>
                <Text  style={styles.item}>{l.reduction}</Text>
            </View>
            ))}
        </View>
        )
    
}



const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
},
itemTitle: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  qrCode: {
    width: '30%'
  },
item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
})