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
  AsyncStorage,
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
    backgroundColor: '#E5E5E5',
    marginTop: 20,
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
  const [nickname, onUsuario] = React.useState('');
  const [senha, onSenha] = React.useState('');

  const windowWidth = Dimensions.get('window').width;

  const enviar = async () => {
    try {
      const Response = await api.post("/login", {nickname, password: senha});
      console.log(Response.data);
      await AsyncStorage.setItem('token', Response.data.token);
      props.navigation.navigate('TelaPrincial')
    } catch (error) {
      console.log(error.message);
      Alert.alert(error.message)
    }
  }

  return (
    
    <SafeAreaView style={[styles.containner, {backgroundColor: "#fff"}]}>
      <View style={[Containers.Card, {width: windowWidth-203, backgroundColor: "#FFF"}]}>
        <Image source={require('../Assets/login.png')} style={Containers.BannerLogin} />
        <View style={Containers.CardInfo}>
          <Text style={Fonts.CardInfo}>Uma nova forma de ajudar os seus vizinhos</Text>
        </View>
      </View>
      <View style={styles.loginBox}>
        <Image source={require('../Assets/logo.png')} style={Containers.BannerLogo} />
        <TextInput
          style={Inputs.SecundaryInput}
          value={nickname}
          onChangeText={(text) => onUsuario(text)}
          placeholder="Usuário"
        />
        <TextInput
          style={Inputs.SecundaryInput}
          value={senha}
          onChangeText={(text) => onSenha(text)}
          placeholder="Senha"
        />

        <View style={styles.separator}></View>

        <TouchableOpacity style={Containers.PrimaryButton}>
          <Text style={Fonts.ButtonLabel} onPress={enviar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Containers.PrimaryButton} onPress={() => props.navigation.navigate('Cadastro')}>
          <Text style={Fonts.ButtonLabel}>Cadastra-se</Text>
        </TouchableOpacity>
      <TouchableOpacity style={Containers.PrimaryButton}>
        <Text style={Fonts.ButtonLabel}>Cadastrar um Prédio</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
