import React, { Component } from 'react';
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';



export default class Tab1Screen extends Component {



  render() {
    return (
  <Text>Welcome</Text>
)
  }
}


Tab1Screen.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Tab1",
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          height: 28,
          width: 28
        }}
        resizeMode="contain"
        source={
          focused
            ? require("./assets/img/ic_profile_select.png")
            : require("./assets/img/ic_profile.png")
        }
      />
    )
  };
};

