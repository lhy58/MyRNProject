import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './pages/home/homePage'
import ProfilePage from './pages/profile/profilePage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24
  }
})

const tabs = [{
  id: 'home',
  title: '首页',
  icon: require('./assets/imgs/ic_tab_strip_icon_feed.png'),
  selectedIcon: require('./assets/imgs/ic_tab_strip_icon_feed_selected.png'),
  page: HomePage
},{
  id: 'profile',
  title: '我的',
  icon: require('./assets/imgs/ic_tab_strip_icon_profile.png'),
  selectedIcon: require('./assets/imgs/ic_tab_strip_icon_profile_selected.png'),
  page: ProfilePage
}]

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedTab: 'home'
    }
  }


  onTabChange(tab) {
    const {navigation} = this.props
    this.setState({ selectedTab: tab.id })
    return navigation.setParams({title: tab.title})
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          {tabs.map(tab => (
            <TabNavigator.Item
              selected={this.state.selectedTab === tab.id}
              title={tab.title}
              renderIcon={() => <Image source={tab.icon} style={styles.icon} />}
              renderSelectedIcon={() => <Image source={tab.selectedIcon} style={styles.icon} />}
              selectedTitleStyle={{ color: '#E03D3E' }}
              onPress={() => this.onTabChange(tab)}>
                {<tab.page />}
            </TabNavigator.Item>
          ))}
        </TabNavigator>
      </View>
    )
  }
}