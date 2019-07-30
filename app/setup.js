import React, {PureComponent} from 'react'
import{ StatusBar }from 'react-native'
import Navigator from './routerConfig'

/*
* --- 统一改变信号电池顶栏---
*/
const lightContentScenes = []

function getCurrentRouteName(navigationState){
    if (!navigationState) {
        return null
    }
    const route = navigationState.routes[navigationState.index]
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route)
    }
    return route.routeName
}


export default class RootScene extends PureComponent {
  constructor(props) {
      super(props);
      
      StatusBar.setBarStyle('light-content')
      StatusBar.setBackgroundColor('#d81e06')
  }

  render(){
      return(
          <Navigator 
              onNavigationStateChange={
                  (prevState, currentState) => {
                      const currentScene = getCurrentRouteName(currentState)
                      const previousScene = getCurrentRouteName(prevState)
                      if (previousScene !== currentScene) {
                          if (lightContentScenes.indexOf(currentScene) >= 0) {
                            StatusBar.setBarStyle('dark-content')
                          } else {
                             StatusBar.setBarStyle('light-content')
                          }
                  }
              }
          }
          />
      )
  }
}