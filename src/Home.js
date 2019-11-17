import React, { Component } from 'react';
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import axios from 'axios';


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { youtubes: [] };
    }

    componentDidMount() {
        this.feedYoutubes();
    }

    feedYoutubes() {
        const data = { username: 'admin', password: 'password', type: 'foods' };
        const url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
        axios.get(url, { params: data })
            .then(response => {
                this.setState({ youtubes: response.data.youtubes })
            })
            .catch(error => {
                alert(JSON.stringify(error));
            });
    }

    renderItemList(item) {
        return (

            <Card containerStyle={{ overflow: 'hidden', flexDirection: 'column', marginBottom: 20, borderRadius: 8, padding: 0 }}>
                <View style={{ flexDirection: 'row', marginBottom: 16, height: 45, alignItems: 'center' }}>
                    <Image source={require("./assets/img/avatar.png")} style={{ width: 45, height: '100%', marginRight: 16 }} />

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: '700' }}>{item.title}</Text>
                        <Text style={{ fontWeight: '100' }}>{item.subtitle}</Text>
                    </View>
                </View>


                <Image source={require("./assets/img/loadingimg.png")} style={{ width: "100%", height: 190 }} />
            </Card>

        )
    }

    renderHeaderList() {
        return (

            <Image
                resizeMode='contain'
                style={{ width: '100%', height: 100, marginBottom: 40 }}
                source={require('./assets/img/header_react_native.png')} />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>5555555555555555555555555</Text>
                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    source={require('./assets/img/bg.png')}>
                    <FlatList

                        ListHeaderComponent={this.renderHeaderList}
                        style={{ marginTop: 40, marginLeft: 12, marginRight: 12 }}
                        // data={[1, 2, 3, 4]}
                        data={this.state.youtubes}
                        renderItem={({ item }) => this.renderItemList(item)}
                    />
                </ImageBackground>
            </View>
        );
    }
}


