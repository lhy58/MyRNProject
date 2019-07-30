import {
    AppRegistry,
} from 'react-native'
// import Index from './app/index';
// import Router from './router'
import App from './App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);