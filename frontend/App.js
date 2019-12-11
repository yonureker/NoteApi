/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './app/reducers';

const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <View />
    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
