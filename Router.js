import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import SearchResult from './src/pages/SearchResult';
import ContentPage from './src/pages/ContentPage';
import UserContext from './src/contexts/UserContext';

//import Profil from './components/CameraPage';
//import QRCode from './components/QRCode';

const Stack = createStackNavigator();
//  


class Router extends React.Component {

  constructor(props){
    super(props);
    this.user = useState();
  }
  render() {
    return (
      <UserContext.Provider value={this.props.user}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            name="SearchResult"
            component={SearchResult}
          />
          <Stack.Screen
            name="ContentPage"
            component={ContentPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UserContext.Provider>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  }
  
  
});

export default Router