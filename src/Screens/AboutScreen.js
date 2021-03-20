// @flow
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import SimpleButton from '../Component/Buttons/Buttons';
import SliderButton from '../Component/Buttons/SliderButtons';
import {ScreensName} from '../Constants/ScreenName';
import {Colors} from '../Constants/Colors';
import {ButtonText} from '../Constants/TextButtons';
import {Styles} from '../Styles/StyleSheet';
import HeaderLeft from '../Component/Header/HeadingLeft';
type Props = {
  name: string,
  addition: {name: string},
  navigation: any,
};
const AboutScreen = (props: Props) => {
  return (
    <View style={[Styles.BackgroundStyle]}>
      <View style={[Styles.Flex_05, Styles.DoLeft]}>
        <HeaderLeft name={props.addition ? props.addition.name : ''} />
      </View>
      <View style={[Styles.Flex_05, Styles.DoCenter]}>
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.LastScreen}
          color={Colors.Transparent}
          TextColor={Colors.DarkColor}
          text={ButtonText.PressText}
          enable={false}
          opacity={1}
        />
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.LastScreen}
          color={Colors.GreyColor}
          TextColor={Colors.DarkColor}
          text={ButtonText.NextText}
          enable={false}
          opacity={1}
        />
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.HomeScreen}
          color={Colors.DarkColor}
          TextColor={Colors.WhiteColor}
          text={ButtonText.PreviousText}
          enable={false}
          opacity={1}
        />
        <SliderButton
          title={ButtonText.SlideText}
          BackColor={Colors.Transparent}
          navigate={props.navigation}
          ScreenName={ScreensName.LastScreen}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state: Props) => {
  const {addition} = state;
  return {
    addition: addition,
  };
};
export default connect(mapStateToProps)(AboutScreen);
