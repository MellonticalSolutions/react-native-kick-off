/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Config/Navigator';
import {Provider} from 'react-redux';
import Store from './src/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
