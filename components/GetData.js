/*
** Fonction qui renvoi les data enregistrer par la fonction StoreData
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('a')
      
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
    }
  }

  export default getData