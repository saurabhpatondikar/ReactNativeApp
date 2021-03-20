import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonText} from '../src/Constants/TextButtons';
import AboutScreen from '../src/Screens/AboutScreen';
import {createStore} from 'redux';
import {addition} from '../src/Reducers/StoreReducer';
import {Provider} from 'react-redux';
import Button from '../src/Component/Buttons/Buttons';

describe('Rendering AboutScreen', () => {
  const initialState = {
    name: 'mock name',
  };
  const mockStore = createStore(addition, initialState);
  const component = (
    <Provider store={mockStore}>
      <AboutScreen />
    </Provider>
  );
  test('render AboutScreen correctly', async () => {
    const {getByText} = render(component);
    const ButtonPress = getByText(ButtonText.PressText);
    expect(ButtonPress).toBeTruthy();
    const ButtonNext = getByText(ButtonText.NextText);
    expect(ButtonNext).toBeTruthy();
    const ButtonPrev = getByText(ButtonText.PreviousText);
    expect(ButtonPrev).toBeTruthy();
    const SlideButton = getByText(ButtonText.SlideText);
    expect(SlideButton).toBeTruthy();
  });
  describe('Buttons Click', () => {
    const navigation = {navigate: jest.fn()};
    const componentButton = <Button navigate={navigation} text={'Press me'} />;
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
