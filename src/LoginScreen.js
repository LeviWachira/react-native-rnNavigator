import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }

   onPressLogIn = async () => {
    try {
      const { username, password } = this.state
      let registerUsername = await AsyncStorage.getItem('username')
      let registerPassword = await AsyncStorage.getItem('password')

      if (registerUsername == null || registerPassword == null) {
        alert("Invalid Null")
        return
      }

      if (registerUsername == username && registerPassword == password) {
        alert("Login Success")
        this.props.navigation.navigate('AppScene')
      }
      else {
        alert("Invalid Account")
      }
    } catch (error) {
      alert(error);
    }
  }

  onPressRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render() {

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image style={styles.banner}
            source={require("./assets/img/header_react_native.png")}
            resizeMode='contain'
          />
          <TextInput style={styles.input}
            autoCapitalize={'none'}
            keyboardType={"email-address"}
            autoCorrect={false}
            placeholder="Username"
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextInput style={styles.input}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'name-phone-pad'}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => this.setState({ password: text })}
          />
          <TouchableOpacity onPress={this.onPressLogIn}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressRegister}
            style={styles.loginButtonText}
          >
            <Text style={styles.registerButtonText}>
              Don't have an account, Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

LoginScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Login",
    headerStyle: {
      backgroundColor: "#119CED",
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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
    paddingTop: 80
  },
  banner: {
    height: 90,
    width: '100%'
  },
  input: {
    height: 50,
    width: '100%',
    marginTop: 10,
    padding: 4,
    borderRadius: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec33'
  },
  loginButton: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 40,
    borderRadius: 10,
    justifyContent: 'center'
  },
  registerButton: {
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  loginButtonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  registerButtonText: {
    fontSize: 18,
    color: '#0007',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
    marginBottom: 40
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});
