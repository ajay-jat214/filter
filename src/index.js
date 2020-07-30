import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {searchRobots} from './reducer';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import {Values} from './Values';

const store = createStore(searchRobots);//here searchRobots is a reducer so don't get confused the next time

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	 ,document.getElementById('root'));
	


serviceWorker.unregister();
