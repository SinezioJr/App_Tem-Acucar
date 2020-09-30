import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Info from "../Components/InfoFavores"
import List from "../Components/ListaFavores"

export default function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="List">
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}