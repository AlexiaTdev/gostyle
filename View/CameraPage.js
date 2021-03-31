/*
** View de l'appareil photo qui scan le qrcode
** Cette view utilise la librairie expo-barcode-scanner pour scanner un qrcode
** Elle renvoi ensuite sa valeur sous forme de caractère à la vue Home
*/

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function CameraPage (props) {
    
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async e => {
    setScanned(true);
         await props.navigation.navigate("Home",{data:e.data});
  };

  if (hasPermission === null) {
    return <Text>Demande d'autorisation de caméra</Text>;
  }
  if (hasPermission === false) {
    return <Text>Pas d'accés à la caméra</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    qrCode:
    {
      width:'30%'
    }
});
