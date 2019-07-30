import React, {Component} from 'react'
import {View,Text} from 'react-native'
import { connect } from 'react-redux'

class ProfilePage extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <View>
                <Text>我的.....</Text>
            </View>
        )
    }
}

const mapStateProps = (state) => {
    return {
        homeInfo: state.home.homeInfo
    }    
}

export default connect(mapStateProps)(ProfilePage)