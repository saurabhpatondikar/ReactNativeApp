//@flow
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../../Styles/StyleSheet';
import {Colors} from '../../Constants/Colors';
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
          props.TextColor === Colors.DarkColor
            ? styles.DarkButtonText
            : styles.WhiteButtonText,
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default Buttons;
