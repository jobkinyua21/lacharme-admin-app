import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';

window.store =store

ReactDOM.render(
  <Provider store={store}> 
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
