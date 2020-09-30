import React from 'react';

import api from "../Service/api"

import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';


import Inputs from "../Stylesheets/Input"
import Containers from "../Stylesheets/Containers"
import Fonts from "../Stylesheets/Fonts"

const styles = StyleSheet.create({
  appBanner: {
    flexDirection: 'row',
    height: '35%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  },

  loginBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3326E0',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  textInput: {
    marginTop: 40,
    backgroundColor: '#ffffff',
    display: 'flex',
  },
  button: {
    backgroundColor: '#04003C',
    color: '#ffffff',
    width: '100%',
  },
  separator: {
    height: 2,
    width: '100%',
    backgroundColor: '#E6E6E6',
    marginHorizontal: 20,
    marginVertical: 10
  },

  appBannerImage: {
    width: 200,
    height: 200,
  },
  containner: {
    height: '100%',
    width: '100%',
  },
});

const Login = (props) => {
  const [id_building, onid_building] = React.useState('');
  const [ap_number, onap_number] = React.useState('');
  const [name, onname] = React.useState('');
  const [nickname, onnickname] = React.useState('');
  const [phone, onphone] = React.useState('');
  const [password, onpassword] = React.useState('');

  const windowWidth = Dimensions.get('window').width;

  const enviar = async () => {
    try {
      console.log({
        nickname,
        id_building,
        ap_number,
        name,
        nickname,
        phone,
        password});
      

      const Response = await api.post("/residents", {
        nickname,
        id_building,
        ap_number,
        name,
        nickname,
        phone,
        password});
      
      Alert.alert("Cadastro realizado com Sucesso\nSiga para o login")
      props.navigation.navigate('Login')
    } catch (error) {
      console.log(error);
      Alert.alert(error.message)
    }
  }

  return (
    <SafeAreaView style={[styles.containner, {backgroundColor: "#fff"}]}>
        <View style={[Containers.BubbleCadastro, {width: windowWidth}]}>
            <Text style={Fonts.BubbleTitle}>Cadastro</Text>          
        </View>
      <View style={{flex: 1, justifyContent: "center", marginBottom: 50}}>
        <View style={[styles.separator, {width: windowWidth-40}]}></View>
        <TextInput
          style={Inputs.Input}
          value={name}
          onChangeText={(text) => onname(text)}
          placeholder="Nome"
        />
        <TextInput
          style={Inputs.Input}
          value={id_building}
          onChangeText={(text) => onid_building(text)}
          placeholder="Id do Prédio"
        />
        <TextInput
          style={Inputs.Input}
          value={nickname}
          onChangeText={(text) => onnickname(text)}
          placeholder="Usuario"
        />
        <TextInput
          style={Inputs.Input}
          value={ap_number}
          onChangeText={(text) => onap_number(text)}
          placeholder="Numero do apartamento"
        />
        <TextInput
          style={Inputs.Input}
          value={phone}
          onChangeText={(text) => onphone(text)}
          placeholder="Telefone"
        />
        <TextInput
          style={Inputs.Input}
          value={password}
          onChangeText={(text) => onpassword(text)}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <View style={[styles.separator, {width: windowWidth-40}]}></View>

        <TouchableOpacity style={Containers.PrimaryButton} onPress={enviar}>
          <Text style={Fonts.ButtonLabel}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Containers.PrimaryButton} onPress={() => props.navigation.navigate('Login')}>
          <Text style={Fonts.ButtonLabel}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Containers.PrimaryButton} onPress={() => props.navigation.navigate('NovoPredio')}>
          <Text style={Fonts.ButtonLabel}>Cadastrar um Prédio</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
