import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonText} from '../src/Constants/TextButtons';
import HomeScreen from '../src/Screens/HomeScreen';
import {createStore, applyMiddleware} from 'redux';
import {NativeModules, NativeEventEmitter} from 'react-native';
import {addition} from '../src/Reducers/StoreReducer';
import {Provider} from 'react-redux';
import Button from '../src/Component/Buttons/Buttons';
import thunk from 'redux-thunk';
const emitter = new NativeEventEmitter();
describe('Rendering HomeScreen', () => {
  const initialState = {
    name: 'mock name',
  };
  beforeEach(() => {
    NativeModules.TestModule = {test: jest.fn()};
    emitter.emit('addListener');
  });
  const mockStore = createStore(addition, initialState, applyMiddleware(thunk));
  const component = (
    <Provider store={mockStore}>
      <HomeScreen />
    </Provider>
  );

  test('render All HomeScreen Buttons correctly', () => {
    const {getAllByText} = render(component);
    const ButtonAll = getAllByText(ButtonText.PressText);
    expect(ButtonAll.length).toBe(1);
  });

  describe('Name Enter on Text view', () => {
    test('name enter in textInput should be save in store', () => {
      const {getByPlaceholderText} = render(component);
      const input = getByPlaceholderText(ButtonText.PlaceHolderText);
      expect(input).toBeTruthy();
      const EnterText = 'John Wick';
      fireEvent.changeText(input, EnterText);
      const NameState = mockStore.getState().addition;
      expect(NameState).toEqual(
        expect.objectContaining({
          name: EnterText,
        }),
      );
    });
  });
  describe('Button Click', () => {
    const navigation = {navigate: jest.fn()};
    const componentButton = <Button navigate={navigation} />;
    test('navigate on next button click', async () => {
      const {findByTestId} = render(componentButton);
      const button = await findByTestId('button');
      fireEvent(button, 'press');
    });
  });
});
