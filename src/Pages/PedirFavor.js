import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Alert,
  AsyncStorage
} from 'react-native';

import api from "../Service/api"

import DropDownPicker from 'react-native-dropdown-picker';
import {favorsStyles} from '../Stylesheets/styles';

export default function PedirFavor() {
  
  
  const [items, setItem] = useState([])
  const [novoItem, setNovoItem] = useState("")
  const [categoria, setcategoria] = useState([])

  const addItem = () => {
    if(novoItem!="")
      setItem([...items, 
        {
          id: items.length,
          item: novoItem,
        }]);
    setNovoItem("")
  }

  useEffect(() => {
    const get = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const Response = await api.get("/categories", {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log("---------------------------")

      await setcategoria([])

      await Response.data.map( async (value) => {
        await setcategoria([...categoria, { label: value.category, value: value.id }])
      })
      
      console.log(categoria);
      
      } catch (error) {
        Alert.alert(error.message)
      }
    }
    get()
  }, [setcategoria])

  return (
    <SafeAreaView>
      <ScrollView style={[favorsStyles.container]}>
        <View style={favorsStyles.topContainer}>
          <Text style={favorsStyles.mainTitle}>Pedir um Favor</Text>
          <Text style={favorsStyles.subTitle}>
            Você pode descrever o seu favor e adicionar itens se for necessário.
          </Text>
        </View>
        <View>
          <DropDownPicker
            items={categoria}
            containerStyle={favorsStyles.input_height}
            style={favorsStyles.dropdown}
            placeholder="Selecione uma categoria"
            showArrow={false}
          />

          <TextInput placeholder="Título" style={favorsStyles.inputs} />
          <TextInput
            placeholder="Descreva o seu pedido de favor"
            style={favorsStyles.long_input}
            multiline={true}
            maxLength={200}
          />

          <View style={favorsStyles.Timecontainer}>
            <View style={favorsStyles.topTimeContainer}>
              <Text>Escolha a duração do seu pedido de favor </Text>
            </View>
          <TouchableOpacity style={favorsStyles.large_btn}>
            <Text style={favorsStyles.button_text}>Pedir Favor</Text>
          </TouchableOpacity>
 
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
