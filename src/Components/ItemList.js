import React, {Component} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {favorsStyles} from '../Stylesheets/styles';

class ItemsScreen extends Component {
  state = {
    items: [
      {
        id: 1,
        item: 'hello',
      },
      {
        id: 2,
        item: 'world',
      },
      {
        id: 3,
        item: 'hackaton',
      },
      {
        id: 4,
        item: 'winners',
      },
      {
        id: 5,
        item: '2020',
      },
    ],
  };
  render() {
    return (
      <SafeAreaView>
        <View style={favorsStyles.container}>
          <View style={favorsStyles.topContainer}>
            <Text style={favorsStyles.mainTitle}>Itens</Text>
            <Text style={favorsStyles.subTitle}>
              Se o favor possui uma lista de itens você pode adicioná-los aqui.
            </Text>
          </View>

          <TextInput placeholder="Item" style={favorsStyles.inputs} />
          <TouchableOpacity style={favorsStyles.large_btn}>
            <Text style={favorsStyles.button_text}>Adicionar item</Text>
          </TouchableOpacity>

          <FlatList
            columnWrapperStyle={favorsStyles.itensList}
            data={this.state.items}
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
          <View style={favorsStyles.centerContainner}>
            <TouchableOpacity style={favorsStyles.button_primary}>
              <Text style={favorsStyles.button_text}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ItemsScreen;
