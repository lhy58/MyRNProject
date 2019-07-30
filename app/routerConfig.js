import React, { Component } from 'react';
import Index from './index'
import {StackNavigator} from 'react-navigation'
import {
    View,
    Text
} from 'react-native';
import HomeDetail from './pages/home/detail/index'

/*
    --- 路由配置 ---
   * 所有组件都必须在这里注册
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。
*/
const styles = {
    navigatorTitle:{
        fontSize:17,
        color:'white',
        flex: 1,
        textAlign: 'center'
    },
    navigator:{
        backgroundColor:'#d81e06',
        textAlign: 'center',
        flex: 1,
    },
    tintColor: '#d81e06'
}

const RouteConfig = StackNavigator(
    {
        Index: {
            screen: Index,
            navigationOptions: ({navigation}) =>{
                const {state} = navigation
                const { params = {} } = state
                return {
                    headerTitle: params.title || '首页',
                    headerStyle:styles.navigator,
                    headerTitleStyle: styles.navigatorTitle,
                    gesturesEnabled:true,
                }
            }
        },
        homeDetail: {
            screen: HomeDetail,
            navigationOptions: {
                headerTitle: '详情',
                headerRight: <View/>,
                headerStyle:styles.navigator,
                headerTitleStyle: styles.navigatorTitle,
                gesturesEnabled:true,
            }
        },
    },
    {
        initialRouteName: 'Index',
        headerMode: 'float',
        headerTintColor: '#d81e06',
        navigationOptions:{
            // headerBackTitle: null,
            headerTintColor: '#d81e06',
            showIcon: true,
        }
    }
)

export default RouteConfig;