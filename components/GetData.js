import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('a')
      console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  export default getData