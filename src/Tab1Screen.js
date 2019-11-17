import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Card } from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Tab1Screen extends Component {

  constructor(props) {
    super(props)
    this.state = {youtubes: []}
  }

  // async componentDidMount() {
  //   try {
  //     let username = await AsyncStorage.getItem('username')
  //     alert(username)
  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  // onClickDetail = () => {
  //   let item = { title: "Navigator", url: "www.google.com" }
  //   this.props.navigation.navigate('Detail', { item })
  // }

  componentDidMount() {
    this.feedYoutube();
  }

 async feedYoutube ()  {
      let dataKey = { username: 'admin', password: 'password', type: 'foods' }
      let url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
      await axios.get(url, { params: dataKey })
        .then(response => {
          this.setState({ youtubes: response.data.youtubes })
        })
    .catch(err => { 
      alert(JSON.stringify(err))
    }) 
}

  renderHeaderList() {
    return (
      <Image source={require("./assets/img/header_react_native.png")}
        resizeMode='contain'
        style={{ height: 70, width: '100%', marginBottom: 30 }}
      />
    )
  }

  renderItemList ({item}) {
    return (
      <View>
        <Card containerStyle={{ flexDirection: 'column', marginBottom: 30, padding: 0, borderRadius: 10, overflow: "hidden" }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require("./assets/img/avatar.png")}
              style={{ height: 40, width: 40, marginRight: 15 }}
            />
            <View style={{ flexDirection: 'column', marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>title</Text>
              <Text style={{ fontWeight: 'normal' }}>subtitle</Text>
            </View>
          </View>
          <Image source={require("./assets/img/loadingimg.png")}
            style={{ height: 150, width: '100%' }}

          />
        </Card>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require("./assets/img/bg.png")}
          style={{ height: '100%', width: '100%', }}
        >
          <FlatList
            style={{ marginTop: 40, marginLeft: 12, marginRight: 12 }}
            ListHeaderComponent={this.renderHeaderList}
            data={this.state.youtubes}
            renderItem={({ item }) => this.renderItemList(item)}
            
          />
          {/* <Button title="Detail" onPress={this.onClickDetail} /> */}
        </ImageBackground>
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

