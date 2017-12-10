import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import thunkMiddleware from 'redux-thunk'
import rootReducer from "Services/Reducers.js"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
