import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import {Values} from './Values';

ReactDOM.render(<App/>, document.getElementById("root"));


serviceWorker.unregister();
