import React from 'react';
import ReactDOM from 'react-dom';
import AppWrap from './AppWrap';
import {Provider} from 'react-redux';
import store from './redux';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppWrap />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
