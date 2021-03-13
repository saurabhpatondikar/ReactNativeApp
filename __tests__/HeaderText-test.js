import * as React from 'react';
import {render} from '@testing-library/react-native';
import HeaderText from '../src/Component/Header/HeadingLeft';

describe('Rendering HeaderText', () => {
  let text = 'John';
  const component = <HeaderText name={text} />;
  test('render HeaderText correctly', async () => {
    const {queryByText} = render(component);
    const Header = queryByText(text);
    expect(Header).not.toBeNull();
  });
});
