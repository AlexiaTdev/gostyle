/* 
** Ici sont définit toutes les pages de navigations de l'application
*/

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './View/Home';
import Camera from './View/CameraPage';
import ListCode from './View/ListCode';


const Stack = createStackNavigator();

class Router extends React.Component {
  render() {
    return (
      
      <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
          />
          <Stack.Screen
            name="ListCode"
            component={ListCode}
          />
        </Stack.Navigator>
        
      </NavigationContainer>

    )
  }
}
export default Router