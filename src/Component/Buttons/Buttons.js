//@flow
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../../Styles/StyleSheet';
type Props = {
  text: string,
  ScreenName: string,
  navigate: any,
  color: any,
  TextColor: any,
};
const Buttons = (props: Props) => {
  const nextScreen = (navigate, screen) => {
    navigate.navigate(screen);
  };
  return (
    <TouchableOpacity
      testID={'button'}
      onPress={() => nextScreen(props.navigate, props.ScreenName)}
      style={[
        styles.DoCenter,
        styles.ButtonDesig,
        {backgroundColor: props.color},
      ]}>
      <Text
        testID={'button_text'}
        style={[
          styles.TextPress,
          {color: props.TextColor ? props.TextColor : null},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default Buttons;
