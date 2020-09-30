import React, {Component, useEffect, useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  Alert,
  AsyncStorage
} from 'react-native';

import api from "../Service/api"

import {favorsStyles} from '../Stylesheets/styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

const FavoresAceitos = (props) => {
  
  const [favores, setFavores] =  useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const get = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const Response = await api.get("/my/favors/accept", {
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
      <SafeAreaView>
        <View style={favorsStyles.container}>
          <View style={favorsStyles.topContainer}>
            <Text style={favorsStyles.mainTitle}>Favores Aceitos</Text>
          </View>
          <ScrollView>
            {favores.map((favor) => (
              <TouchableWithoutFeedback
                key={favor.id}
                style={favorsStyles.favorListItem}
                onPress={() =>
                  props.navigation.navigate('Info', {favor: favor})
                }>
                <Image
                  source={{uri: 'https://img.ibxk.com.br/2018/06/06/06170422826393.jpg'}}
                  style={favorsStyles.userPic}
                />
                <View>
                  <Text style={favorsStyles.favorTitle}>{favor.title}</Text>
                  <Text style={favorsStyles.favorDescription}>
                    {favor.description}
                  </Text>
                  <Text style={favorsStyles.date}>{favor.date}</Text>
                  <View style={favorsStyles.userInfo}>
                    <Text style={favorsStyles.state}>{favor.state}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
}

export default FavoresAceitos;
