import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import Index from './app/index';
import Setup from './app/setup'

import configStore from './app/store'
const store = configStore();

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<Setup />
			</Provider>
		);
	}
}

export default App;
