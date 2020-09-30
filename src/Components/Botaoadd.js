import React from "react"

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
    KeyboardAvoidingView  
    } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/Fontisto';

export default (props) => {
    return(
        <TouchableOpacity onPress={() => props.navigation('Notificações')} style={{margin: 20,position: "absolute", right: 0, bottom: 0, justifyContent: "center", backgroundColor: "#3326E0", width: 63, height: 63, borderRadius: 50}}>
            <Text style={{textAlign: "center"}}><FontAwesome5 name="pinboard" size={32} color="#FFF" /></Text>
        </TouchableOpacity>
    )
}