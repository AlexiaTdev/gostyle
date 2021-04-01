/*
** View qui permet d'afficher tout les codes que l'utilisateur a enregistré sur son téléphone
** Cette vie récupére les codes enregistrés via la fonction GetData
*/

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import GetData from '../components/GetData'

export default function ListCode(props){

    const [myList, setMyList]=useState([])

    useEffect(()=>{
        setMyList([])
        console.log("list1")
                console.log(myList)
                console.log("list1")
        GetData().then((datas)=>{
            datas.map((data)=>{
                myList.push(data)
                console.log("list2")
                console.log(myList)
                console.log("list2")
            })
        })
        

    },[])
    return (        
        <View style={styles.container}>
            <Text  style={styles.itemTitle}>Liste des promos</Text>
            
            <Text  style={styles.item}>{myList.map((l)=>(
                <View style={styles.container}>
                    <Text  style={styles.item}>{l.codePromo}</Text>
                    <Text  style={styles.item}>{l.reduction}</Text>            
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