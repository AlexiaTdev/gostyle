import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import Camera from './components/CameraPage';
import QRCode from './components/QRCode';

const Stack = createStackNavigator();

class Router extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={App}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
          />
          <Stack.Screen
            name="QRCode"
            component={QRCode}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router