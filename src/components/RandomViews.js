import React, {useState} from 'react'
import logoTrip from '../img/logoTrip.png'
import logoresearch from '../img/logoResearch.png'
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity, Image, Dimensions, FlatList, ScrollView, SafeAreaView, StatusBar  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import baladeVille from '../img/activitypng/baladeVille.png';
import randonneeForet from '../img/activitypng/randonneeForet.png';
import marcheFlottant from '../img/activitypng/marcheFlottant.png';
import visiteTemple from '../img/activitypng/visiteTemple.png';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Balade dans les rues de Bombay",
      img: baladeVille
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Visite du temple Brahmavihara-Arama",
      img: visiteTemple
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Randonnés Sidobre",
      img: randonneeForet
    },
    {
        id: "F58694a0f-3da1-471f-bd96-145J666",
        title: "Découverte du marché flottant de Ratchaburi",
        img: marcheFlottant
      },
  ];
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
            style={styles.tinyPhoto}
            source={item.img}
            />
    </TouchableOpacity>
  );

function RandomViews({navigation}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [simpleText, setText] = useState("date départ");
    const [destination, setDestination] = useState("");
    const [activity, setActivity] = useState("");
    const [alternativeSide, setAlternativeSide] = useState(true);


    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {

        return (
        <Item
            item={item}
            onPress={ () => navigation.navigation.navigate('ContentPage')}
            >
        </Item>
        );
    };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop: StatusBar.currentHeight || 0,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0.5,0.2)',

      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 250,
        height: 250,
      },
      title: {
        fontSize: 18,
        color:'white'
      },
      tinyPhoto: {
        width: 200,
        height: 200,

      }
})





export default RandomViews;
