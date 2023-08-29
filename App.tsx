/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigation/stackNav';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import store from 'redux/store';

function App(): JSX.Element {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 500});
    console.log('BootSplash has been hidden successfully');
  }, []);

  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
