import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SectionList, ImageBackground, Button, StyleSheet, Text, View } from 'react-native';



export default function ListComponent() {
  return (
    <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Alimentation', data: ['huile de pépin de raisin', 'farine protéinée']},
            {title: 'Vetement', data: ['sweet a capuche']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


/**resizeMode: "cover", 
 *     <StatusBar style="auto" />
 * 
 * const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
  head: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  qrCode: {
    width: '20px'
  }
  
});
*/
