import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class Tab1Screen extends Component {


  onClickDetail = () => {
    let item = { title: "Navigator" , url : "www.google.com"}
    this.props.navigation.navigate('Detail' , {item})
  }

  render() {
    return (
      <View>
        <Text> Tab1Screen </Text>
        <Button title="Detail" onPress={this.onClickDetail} />
      </View>
    );
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

