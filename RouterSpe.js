import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App.js';
import CameraPage from './components/CameraPage.js';

const Stack = createStackNavigator();

export default function RouterSpe() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="QRScanner" component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
