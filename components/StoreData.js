import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {

        try {
            console.log("fonction")
        console.log(value)
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('a', jsonValue)
        } catch (e) {
          // saving error
        }
      
    finally
    {
        return(<p>a</p>)
    }
  }

  export default storeData