//@flow
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Styles} from '../../Styles/StyleSheet';
import {Colors} from '../../Constants/Colors';
type Props = {
  text: string,
  ScreenName: string,
  navigate: any,
  color: any,
  TextColor: any,
  enable: any,
  opacity: any,
};
const Buttons = (props: Props) => {
  const nextScreen = (navigate, screen) => {
    navigate.navigate(screen);
  };
  return (
    <TouchableOpacity
      disabled={props.enable ? props.enable : false}
      testID={'button'}
      onPress={() => nextScreen(props.navigate, props.ScreenName)}
      style={[
        Styles.DoCenter,
        Styles.ButtonDesign,
        {backgroundColor: props.color},
        props.opacity && props.opacity < 1
          ? Styles.ButtonOpacity05
          : Styles.ButtonOpacity1,
      ]}>
      <Text
        testID={'button_text'}
        style={[
          Styles.TextPress,
          props.TextColor === Colors.DarkColor
            ? Styles.DarkButtonText
            : Styles.WhiteButtonText,
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default Buttons;
