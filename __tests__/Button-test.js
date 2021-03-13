import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../src/Component/Buttons/Buttons';

describe('Rendering Button', () => {
  const navigation = {navigate: jest.fn()};
  const component = <Button navigate={navigation} text={'Press me'} />;
  test('render button correctly', async () => {
    const {findByTestId, queryByText} = render(component);
    const button = await findByTestId('button');
    expect(button).toBeTruthy();
    const ButtonText = queryByText('Press me');
    expect(ButtonText).not.toBeNull();
  });
  test('navigate on button click', async () => {
    const {findByTestId} = render(component);
    const button = await findByTestId('button');
    fireEvent(button, 'press');
  });
});
