import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonText} from '../src/Constants/TextButtons';
import LastScreen from '../src/Screens/AboutScreen';
import {createStore} from 'redux';
import {addition} from '../src/Reducers/StoreReducer';
import {Provider} from 'react-redux';
import Button from '../src/Component/Buttons/Buttons';

describe('Rendering LastScreen', () => {
  const initialState = {
    name: 'mock name',
  };
  const mockStore = createStore(addition, initialState);
  const component = (
    <Provider store={mockStore}>
      <LastScreen />
    </Provider>
  );
  test('render LastScreen correctly', async () => {
    const {getByText} = render(component);
    const ButtonNext = getByText(ButtonText.NextText);
    expect(ButtonNext).toBeTruthy();
    const ButtonPrev = getByText(ButtonText.PreviousText);
    expect(ButtonPrev).toBeTruthy();
  });
  describe('Buttons Click', () => {
    const navigation = {navigate: jest.fn()};
    const componentButton = <Button navigate={navigation} />;
    test('navigate on next button click', async () => {
      const {findByTestId} = render(componentButton);
      const button = await findByTestId('button');
      fireEvent(button, 'press');
    });
    test('navigate on Prev button click', async () => {
      const {findByTestId} = render(componentButton);
      const button = await findByTestId('button');
      fireEvent(button, 'press');
    });
  });
});
