import React, {useState} from 'react'
//import bckImg from '../../img/naturebase.jpg'
import logoresearch from '../img/logoResearch.png'
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity, Image, Dimensions  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function SearchBar({navigation}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [simpleText, setSimpleText] = useState("date départ");

    const [destination, setDestination] = useState("destination");
    const [activity, setActivity] = useState("activité");


    const showDatepicker = () => {
        showMode('date');
      };
    
    const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setSimpleText(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
        
    };
    

  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainTitle}>
            <Text style={styles.title}>Recherchez et constituez votre voyage</Text>
        </View>
        <View style={styles.formItems}>
            <TextInput
                value={destination}
                placeholder="destination"
                keyboardType="default"
                onChangeText={setDestination}
            />    
            <TextInput
                value={activity}
                placeholder="activité"
                keyboardType="default"
                onChangeText={setActivity}                
            />
            <TextInput
                value={simpleText}
                placeholder="date départ"
                keyboardType="default"
                onFocus={showDatepicker}
            />
            <View>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
            </View>
            <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigation.navigate('SearchResult')}>
                <Image
                    style={styles.EleRight}
                    source={logoresearch}
                />
            </TouchableOpacity>
        </View>
        
   
    </View>
    
  );
}
//
const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
      flex: 1,
      width: Dimensions.get('window').width,

      backgroundColor: 'rgba(0,0,0.5,0.2)',

      alignItems: 'center',
      marginTop: 50,
      paddingBottom: 30


    },
    EleRight: {
        width: 50,
        height: 50,
    },
    formItems: {
        flexDirection: 'column',
        flex: 1,
        alignContent: 'center',
    },
    title: {
        marginBottom: 20


    },
    mainTitle: {

  


    }
})




export default SearchBar;

