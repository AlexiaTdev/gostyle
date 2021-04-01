/*
** Ce component reçu le dernier code promo en paramètre d'entrée
** Il contient un bouton qui permet d'ajouter le code à la liste de son téléphone
** La gestion de l'affichage du dernier code promo est géré dans ce component
*/

import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

import StoreData from './StoreData'
import GetData from './GetData'
import {JetContext}  from '../contexts/CodeContext'

const GetPromos = ({ promos }) => {
    const [Jets, setJets] = useContext(JetContext );
    const [myData, setMyData]=useState([])
    const [userId, setUserId] = useState(0)

    const upData=(()=>{
        promos.map((promo)=>{
            if (myData.filter((promoList)=> promoList.codePromo== promo.codePromo).length ==0) {
                myData.push(promo)
            }
        })
    })
    
    

    const up=()=>{
        setMyData([])
        setJets([])
        //console.log("222")
        
        GetData().then((data)=>{
            
            //console.log("data")
            //console.log(data)
            setMyData([])
            //console.log("myDatabefore")
            
            if(data==null)
            {}
            else
            {
                data.map((d)=>{
                    if (!myData.includes(d)) {
                        console.log("jelajoute")
                        myData.push(d)
                    }
                })
            }
            //console.log("myDataAfter")
            //console.log(myData)
            
            upData()
            console.log("myData is ")
            console.log(myData)
        //console.log("update")
        console.log("JETSSSSSSS")
        setJets(myData);
        console.log(Jets)
          
          
          StoreData(myData)
          }
          )          
        
    }
    const down= () => {
        setMyData([])
        setJets([])
        StoreData([])
        console.log(Jets)
        console.log("itsmydata")
        console.log(myData)
    }
    //,[qrCode])

    return (        
    <View style={styles.container}>
        <Text  style={styles.itemTitle}>Liste des promos</Text>
        
        {Jets==undefined?  <Text  style={styles.item}></Text>:Jets.map((promo) => (
        <View style={styles.container} key={promo.codePromo}>
            <Text  style={styles.item}>{promo.codePromo}</Text>
            <Text  style={styles.item}>{promo.reduction}</Text>
        </View>
        ))}
        <Button style={styles.qrCode} title='Add à liste' onPress={()=>up(this)} />
        <Button style={styles.qrCode} title='flush the list' onPress={()=>down(this)} />
    </View>
    )
};

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


    /**
     * return (        
    <View style={styles.container}>
        <Text  style={styles.itemTitle}>Liste des promos</Text>
        
        {promos==undefined?  <Text  style={styles.item}></Text>:promos.map((promo) => (
        <View style={styles.container} key={promo.codePromo}>
            <Text  style={styles.item}>{promo.codePromo}</Text>
            <Text  style={styles.item}>{promo.reduction}</Text>
        </View>
        ))}
        <Button style={styles.qrCode} title='Add à liste' onPress={()=>up(this)} />
    </View>
    )
     */
export default GetPromos;