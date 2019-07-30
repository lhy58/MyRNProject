/*
*
*首页
*/

import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'
import { connect } from 'react-redux'
import { dispatchHome, dispatchHomeData } from '../../actions/home'
import { withNavigation } from 'react-navigation'

class HomePage extends Component{
    constructor(props){
      super(props)
      this.state = {}
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(dispatchHomeData({
            id: '1',
            name: '旧城',
            age: '20'
        }))
    }
    render(){
        const {homeInfo} = this.props
        // console.warn('homeInfo', homeInfo)
        return (
            <View>
                <Text>姓名: {homeInfo.name}</Text>
                <Text>年龄: {homeInfo.age}</Text>
                <Button 
                  onPress={()=>{this.props.navigation.navigate('homeDetail')}}
                  title="点我进详情"
                  color="#841584"
                />
            </View>
        )
    }
}
const mapStateProps = (state) => {
    return {
        homeInfo: state.home.homeInfo
    }    
}
export default connect(mapStateProps)(withNavigation(HomePage))