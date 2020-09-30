import React, {Component, useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  AsyncStorage,
} from 'react-native';

import {favorsStyles} from '../Stylesheets/styles';

import api from "../Service/api"

export default function FavorStatus(props){
    const [favor] =  useState(props.route.params.favor);
    const [items, setItem] =  useState([]);

    useEffect(() => {
      const get = async () => {
        try {
          const token = await AsyncStorage.getItem("token");
          const Response = await api.get("/items/" + favor.id, {
          headers: { Authorization: `Bearer ${token}` }
        })
        setItem(Response.data);
        console.log(Response.data);
        } catch (error) {
          Alert.alert(error.message)
        }
      }
      get()
    }, [setItem, favor])

    const aceitarFavor = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const Response = await api.post("/favors/accept/" + favor.id, {} , {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(Response.data);
      
      props.navigation.navigate('Favores Aceitos');
      } catch (error) {
        Alert.alert(error.message)
      }
  }

  const deletarFavor = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const Response = await api.delete("/my/favors/giveup/" + favor.id , {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(Response.data);
    
    props.navigation.navigate('Favores Aceitos');
    } catch (error) {
      Alert.alert(error.message)
    }
}

    const FavorState = (user, state) => {
      switch (state) {
        case 'em aberto':
          return `Ninguém ainda se ofereceu para fazer este favor para ${user.name} do apartamento ${user.address}`;
        case 'em andamento':
          return `Este favor foi aceito por ${user.name} do apartamento ${user.address}`;
        case 'finalizado':
          return `Este favor foi feito por ${user.name} do apartamento ${user.address}`;
        default:
          break;
      }
    }
    return (
    <SafeAreaView>
      <View style={favorsStyles.container}>
        <View style={favorsStyles.topContainerBlue}>
          <Text Upp style={favorsStyles.mainTitleWhite}>
            {favor.title}
          </Text>
          <Text style={favorsStyles.subTitleWhite}>
            {favor.description}
          </Text>
        </View>

        <View status={favorsStyles.centerContainner}>
          <Text style={favorsStyles.statusAberto}> Em Aberto </Text>
          <Text style={favorsStyles.subTitleStatus}>
            {FavorState({name: 'Dinho', address: 666}, favor.state)}
          </Text>
        </View>

        <Text style={favorsStyles.itensSubTitle}> Itens </Text>
        <FlatList
          columnWrapperStyle={favorsStyles.itensList}
          data={items}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View style={favorsStyles.item}>
                <Text style={favorsStyles.whiteText}> {item.item} </Text>
              </View>
            );
          }}
        />
        {(favor.state === 'Em aberto' )?
        <View style={favorsStyles.centerContainner}>
          <TouchableOpacity style={favorsStyles.button_primary} onPress={aceitarFavor}>
            <Text style={favorsStyles.button_text}>Fazer favor</Text>
          </TouchableOpacity>
        </View>:null}
        {(favor.state === 'Em andamento')?
        <View style={favorsStyles.centerContainner}>
          <TouchableOpacity style={favorsStyles.button_primary} onPress={deletarFavor}>
            <Text style={favorsStyles.button_text}>Desistir do favor</Text>
          </TouchableOpacity>
        </View>:null}
      </View>
    </SafeAreaView>
  );
};
