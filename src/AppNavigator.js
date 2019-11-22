
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import DetailScreen from './DetailScreen';


const BottomTabStack = createBottomTabNavigator({
  Tab1: { screen: Tab1Screen },
  Tab2: { screen: Tab2Screen }
}, {
  initialRouteName: 'Tab1'
})

BottomTabStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle,
    headerStyle: { backgroundColor: '#339CED' },
    headerTitleStyle: { color: "#fff" },
    headerTintColor: "#FFFFFF",
  };
};

const Appstack = createStackNavigator({
  Tabs: { screen: BottomTabStack },
  Detail: { screen: DetailScreen }
}, {
  initialRouteName: 'Tabs'
})

const AuthenStack = createStackNavigator({
  Home: { screen: LoginScreen },
}, {
  initialRouteName: 'Home'
})

const RegisterStack = createStackNavigator({
  Register: { screen: RegisterScreen }
} , {
  initialRouteName : 'Register'
})

export default createAppContainer(
  createSwitchNavigator({
    AuthenScene: AuthenStack,
    AppScene: Appstack ,
    Register : RegisterStack 
  }, {
    initialRouteName: 'AuthenScene'
  })
)











