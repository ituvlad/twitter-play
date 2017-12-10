import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import rootReducer from "Services/Reducers.js"
import rootSaga from "Services/sagas.js"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);