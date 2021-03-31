import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {

        try {
          const jsonValue = JSON.stringify(value)
          //console.log("in storage")
          //console.log(jsonValue)
          await AsyncStorage.setItem('a', jsonValue)
          
        } catch (e) {
          // saving error
        }

  }

  export default storeData