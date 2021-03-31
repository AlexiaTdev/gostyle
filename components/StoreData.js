/*
** Fonction qui enregistre sur le téléphone les données qui lui sont envoyées en paramètre d'entré
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {

        try {
          const jsonValue = JSON.stringify(value)

          await AsyncStorage.setItem('a', jsonValue)
          
        } catch (e) {
        }

  }

  export default storeData