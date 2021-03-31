import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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
         //alert(`type de code ${e.type} !! data  ${e.data} (string) scannée`);
         await props.navigation.navigate("App",{data:e.data});
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

  //{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  //{scanned &&<Button style={styles.qrCode} title='Voir la promo' onPress={()=>props.navigation.navigate('App')}></Button>}