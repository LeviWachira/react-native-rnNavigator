import React, { Component } from 'react';
import { View, Text , Image } from 'react-native';

export default class Tab2Screen extends Component {
  

  render() {
    return (
      <View>
        <Text> Tab2Screen </Text>
      </View>
    );
  }
}

Tab2Screen.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Tab2",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 28,
        width: 28
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/img/ic_card_select.png")
          : require("./assets/img/ic_card.png")
      }
    />
  )
  };
};
