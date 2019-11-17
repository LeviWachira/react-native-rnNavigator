import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';


export default class LoginScreen extends Component {

   onClickLogin = async () => {
    try {
      await AsyncStorage.setItem('username', 'Levi Wachira')
      this.props.navigation.navigate('AppScene')
    } catch (err) {
      alert(err)
    }
  }

  onClickRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render() {

    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        <Button title="Login" onPress={this.onClickLogin} />
        <Button title="Register" onPress={this.onClickRegister} />
      </View>
    );
  }
}

LoginScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Home",
    headerStyle: {
      backgroundColor: "#119CED"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" },
    headerBackTitle: " ",
    headerRight: (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => alert("www.codemobiles.com")}
        style={{ padding: 10 }}
      >
        <Image
          source={require("./assets/img/avatar.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    )
  };
};

