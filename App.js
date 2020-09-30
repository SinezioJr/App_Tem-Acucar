import React from 'react';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadatro';
import NovoPredio from './src/Pages/NovoPredio';
import TelaPrincial from './src/index';
import { NavigationContainer } from '@react-navigation/native';

export default function MyStack() {

  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="List">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="NovoPredio" component={NovoPredio} />
        <Stack.Screen name="TelaPrincial" component={TelaPrincial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}