/**
 * @format
 */

import * as React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
import {NativeEventEmitter, NativeModules} from 'react-native';
const emitter = new NativeEventEmitter();
test('render App correctly or not', () => {
  beforeEach(() => {
    NativeModules.TestModule = {test: jest.fn()};
    emitter.emit('addListener');
  });
  const component = render(<App />);
  expect(component).toBeTruthy();
  expect(component).toMatchSnapshot();
});
