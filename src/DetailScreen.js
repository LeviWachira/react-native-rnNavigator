import React, { Component } from 'react';
import { View, Text , Button} from 'react-native';

export default class DetailScreen extends Component { 

  componentDidMount () {
    let item = this.props.navigation.getParam('item')
    alert(JSON.stringify(item))
  }

  render() {
    return (
      <View>
        <Text> DetailScreen </Text>
      </View>
    );
  }
}

DetailScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Detail",
    headerStyle: {
      backgroundColor: "#119CED"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" },
    headerBackTitle: " ",
  
  };
};