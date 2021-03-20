/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */
// @flow
import React, {useEffect} from 'react';
import {addition} from './src/Reducers/StoreReducer';
import HomeScreen from './src/Screens/HomeScreen';
import AboutScreen from './src/Screens/AboutScreen';
import LastScreen from './src/Screens/LastScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {ScreensName} from './src/Constants/ScreenName';
import thunk from 'redux-thunk';
import {NativeModules, Platform} from 'react-native';
const store = createStore(addition, applyMiddleware(thunk));
const Stack = createStackNavigator();
const AnModule = NativeModules.ReactJava;

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      AnModule.checkForEmulator();
    }
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ScreensName.HomeScreen}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreensName.AboutScreen}
            component={AboutScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreensName.LastScreen}
            component={LastScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
