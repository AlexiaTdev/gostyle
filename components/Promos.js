/*
** Ce component reçu le dernier code promo en paramètre d'entrée
** Il contient un bouton qui permet d'ajouter le code à la liste de son téléphone
** La gestion de l'affichage du dernier code promo est géré dans ce component
*/

import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

import StoreData from './StoreData'
import GetData from './GetData'

const GetPromos = ({ promos },{qrCode}) => {

    const [myData, setMyData]=useState([])
    const [userId, setUserId] = useState(0)

    const upData=(()=>{
        promos.map((promo)=>{
            myData.push(promo)
        })
    })
    
    //useEffect(()=>{
        const up=()=>{
        console.log("222")
        GetData().then((data)=>{
            console.log("data")
            console.log(data)
            setMyData([])
            console.log("myDatabefore")
            console.log(myData)

            if(data==null)
            {}
            else
            {
                data.map((d)=>{
                    myData.push(d)
                })
            }
        
            console.log("myDataAfter")
            console.log(myData)
            upData()
            console.log("update")
          console.log(myData)
          StoreData(myData)
          })          
        
    }
    //,[qrCode])

    return (        
    <View style={styles.container}>
        <Text  style={styles.itemTitle}>Liste des promos{qrCode}</Text>
        
        {promos==undefined?  <Text  style={styles.item}></Text>:promos.map((promo) => (
        <View style={styles.container}>
            <Text  style={styles.item}>{promo.codePromo}</Text>
            <Text  style={styles.item}>{promo.reduction}</Text>
        </View>
        ))}
        <Button style={styles.qrCode} title='Add à liste' onPress={()=>up(this)} />
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


export default GetPromos;