import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import store from './Store/redux-store';
import { Provider } from 'react-redux';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
