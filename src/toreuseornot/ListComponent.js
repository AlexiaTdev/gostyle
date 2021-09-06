import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";




export default function ListComponent({promo}) {

  /**
   * {promo}
   */

  const newDataJson = [
    {
        "QRCodePromo": "azerty",
        "codePromo": "T-SHIRT anti transpiration",
        "reduction": "20%"
    },
    {
        "QRCodePromo": "qwerty",
        "codePromo": "Bandana réhausseur d'énergie",
        "reduction": "30%"
    },
    {
        "QRCodePromo": "namana",
        "codePromo": "chaussettes anti gravitationnelles",
        "reduction": "40%"
    },
    {
        "QRCodePromo": "lumulu",
        "codePromo": "maillot flottant",
        "reduction": "50%"
    }
  ]
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.codePromo}</Text>
      <Text style={[styles.title, textColor]}>{item.reduction}</Text>
    </TouchableOpacity>
  );

    const [selectedId, setSelectedId] = useState(null);
  
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={promo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

