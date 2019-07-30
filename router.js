import React, { Component } from 'react'
import {
  createStackNavigator,
  createAppContainer,
  // createBottomTabNavigator,
} from 'react-navigation'
import Index from './app/index'
import Profile from './app/pages/Profile/profilePage'


const SketchRouter = createStackNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
  },
  
  {
    headerBackTitleVisible: false,
  }
)

export default createAppContainer(SketchRouter)