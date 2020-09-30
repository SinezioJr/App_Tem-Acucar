import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import Fonts from "../Stylesheets/Fonts"
import Containers from "../Stylesheets/Containers"

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View>
      <Feather name="more-vertical" size={34} color={"#000"} style={{position: "absolute", top: 10, right: 10}}/>
        <View style={Containers.Title}>
          <Text style={Fonts.Title}>Vizinhos</Text>
        </View>
        <View style={[Containers.Card, {width: windowWidth-103}]}>
          <Image source={{uri: 'https://img.ibxk.com.br/2018/06/06/06170422826393.jpg'}} style={Containers.ImagemPerfil}/>
          <View style={Containers.CardInfo}>
            <Text style={Fonts.CardTitle}>
              Piper Perri
            </Text>
            <Text style={Fonts.CardInfo}>
              Piper Perri
            </Text>
          </View>
        </View>
        <StatusBar style="auto" />
    </View>
  
  );
}