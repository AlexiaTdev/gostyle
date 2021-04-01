/*
** View qui permet d'afficher tout les codes que l'utilisateur a enregistré sur son téléphone
** Cette vie récupére les codes enregistrés via la fonction GetData
*/

import React, {useState, useEffect, useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import GetData from '../components/GetData'
import {JetContext}  from '../contexts/CodeContext'

export default function ListCode(props){
  const [Jets, setJets] = useContext(JetContext );

    return (        
        <View style={styles.container}>
            <Text  style={styles.itemTitle}>Liste des promos</Text>
            <Text  style={styles.item}>{Jets.map((nana)=>(
                <View style={styles.container} key={nana.codePromo}>
                    <Text  style={styles.item}>{nana.codePromo}</Text>
                    <Text  style={styles.item}>{nana.reduction}</Text>            
                </View>))}
            </Text>
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