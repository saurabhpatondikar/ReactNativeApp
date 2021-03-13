/**
 * @format
 */

import * as React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

test('render App correctly or not', () => {
  const component = render(<App />);
  expect(component).toBeTruthy();
  expect(component).toMatchSnapshot();
});
