import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, Dimensions, ScrollView, Alert, AsyncStorage } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import Fonts from "../Stylesheets/Fonts"
import Containers from "../Stylesheets/Containers"

import ButtonAdd from "./Botaoadd"

import api from "../Service/api"
import { useIsFocused } from '@react-navigation/native';

export default function App(props) {
  const windowWidth = Dimensions.get('window').width;

  const [favores, setFavores] =  useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const get = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const Response = await api.get("/favors", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setFavores(Response.data);
      console.log(Response.data);
      
      } catch (error) {
        Alert.alert(error.message)
      }
    }
    get()
  }, [setFavores, isFocused])


  return (
    <View style={{flex: 1}}>
      <Feather name="more-vertical" size={34} color={"#000"} style={{position: "absolute", top: 10, right: 10}}/>
        <View style={Containers.Title}>
          <Text style={Fonts.Title}>{favores.length} Favores</Text>
          <Text style={Fonts.SubTitle}>Em aberto</Text>
        </View>
        <ScrollView>
            {favores.map((favor) => (
              <TouchableWithoutFeedback key={favor.id} style={[Containers.Card, {width: windowWidth-40}]} onPress={() =>
                props.navigation.navigate('Info', {favor: favor})
              }>
              <Image source={{uri: 'https://img.ibxk.com.br/2018/06/06/06170422826393.jpg'}} style={Containers.ImagemPerfil}/>
              <View style={[Containers.CardInfo, {width: windowWidth-140}]}>
                <Text style={Fonts.CardTitle}>
                {favor.title}
                </Text>
                <Text style={Fonts.CardInfo}>
                  {favor.description}
                </Text>
                <Text style={[Fonts.CardInfo, {textAlign: "right"}]}>
                {favor.date}
                </Text>
              </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
      <StatusBar style="auto" />
          <ButtonAdd navigation={props.navigation.navigate}/>
    </View>
  );
}