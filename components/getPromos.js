import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const GetPromos = ({ promos }) => {
    return (
    <View style={styles.container}>
        <Text  style={styles.item}>Liste des promos</Text>
        
        {promos==undefined?  <Text  style={styles.item}></Text>:promos.map((promo) => (
        <View style={styles.container}>
            <Text  style={styles.item}>{promo.codePromo}</Text>
            <Text  style={styles.item}>{promo.reduction}</Text>
        </View>
        ))}
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
    })
  
    


export default GetPromos;