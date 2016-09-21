'use strict';

// tutorial: https://www.marconijr.com/post/react-native-and-redux/
// github repo: https://github.com/marconi/ExtPlaylist

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux/native';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './apps/reducers';
import App from './apps/app';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

const wrapper = () => {
  return (
    <Provider store={ store }>
      {() => <App />}
    </Provider>
  );
};

export default wrapper;