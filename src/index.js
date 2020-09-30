import React from 'react';

import Mural from "./Pages/Mural"
import Vizinhos from "./Components/ItemList"
import PedirFavor from "./Pages/PedirFavor"
import FavoresAceitos from "./Pages/FavoresAceitos"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}}>
        <Tab.Screen name="Favores Aceitos" component={FavoresAceitos} options={{tabBarIcon: ({size, color}) => <FontAwesome5 name="clipboard-check" size={size} color={color} />}} />
        <Tab.Screen name="Mural" component={Mural} options={{tabBarIcon: ({size, color}) => <FontAwesome5 name="list-ul" size={size} color={color} />}} />
        <Tab.Screen name="Notificações" component={PedirFavor} options={{tabBarIcon: ({size, color}) => <Ionicons name="chat-bubble" size={size} color={color} />}} />
        <Tab.Screen name="Vizinhos" component={Mural} options={{tabBarIcon: ({size, color}) => <FontAwesome5 name="building" size={size} color={color} />}} />
      </Tab.Navigator>
  );
}