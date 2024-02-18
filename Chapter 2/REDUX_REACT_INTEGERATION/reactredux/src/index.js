import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

import { AcountReducer } from './reducers/account';
import { BonusReducer } from './reducers/bonus';

//store
const store = createStore(
  combineReducers({
      account : AcountReducer,
      bonus : BonusReducer
  }),
  applyMiddleware(logger,thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
