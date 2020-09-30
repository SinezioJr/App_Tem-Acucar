import React from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
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
  const [value, onChangeText] = React.useState('Usuario');

  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={[styles.containner, {backgroundColor: "#fff"}]}>
        <View style={[Containers.BubbleCadastro, {width: windowWidth}]}>
            <Text style={Fonts.BubbleTitle}>Novo Prédio</Text>          
        </View>
      <ScrollView style={{flex: 1}}>
        <View style={[styles.separator, {width: windowWidth-40}]}></View>
        <TextInput
          style={Inputs.Input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Endereço"
        />
        <TextInput
          style={Inputs.Input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Nome do prédio"
        />
        <TextInput
          style={Inputs.Input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Nome"
        />
        <TextInput
          style={Inputs.Input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Usuario"
        />
        <TextInput
          style={Inputs.Input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Numero do apartamento"
        />
        <TextInput
          style={Inputs.Input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Telefone"
        />
        <TextInput
          style={Inputs.Input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Senha"
        />
        <View style={[styles.separator, {width: windowWidth-40}]}></View>

        <TouchableOpacity style={Containers.PrimaryButton} onPress={() => props.navigation.navigate('TelaPrincial')}>
          <Text style={Fonts.ButtonLabel}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
