/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import appReducer from './src/reducers/appReducer';
import thunk from 'redux-thunk';

export default class App extends Component {
  render() {
    const store = createStore(appReducer, applyMiddleware(thunk));
    return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaView}>  
        <AppNavigator/>
      </SafeAreaView>
    </Provider>
    );
  }
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  }
})