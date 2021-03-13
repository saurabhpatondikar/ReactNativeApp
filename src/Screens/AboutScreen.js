// @flow
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import SimpleButton from '../Component/Buttons/Buttons';
import {ScreensName} from '../Constants/ScreenName';
import {Colors} from '../Constants/Colors';
import {ButtonText} from '../Constants/TextButtons';
import {styles} from '../Styles/StyleSheet';
import HeaderLeft from '../Component/Header/HeadingLeft';
type Props = {
  name: string,
  addition: {name: string},
  navigation: any,
};
const AboutScreen = (props: Props) => {
  return (
    <View style={[styles.BackgroundStyle]}>
      <View style={[styles.Flex_05, styles.DoLeft]}>
        <HeaderLeft name={props.addition ? props.addition.name : ''} />
      </View>
      <View style={[styles.Flex_05, styles.DoCenter]}>
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.LastScreen}
          color={Colors.DarkColor}
          TextColor={Colors.WhiteColor}
          text={ButtonText.NextText}
        />
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.HomeScreen}
          color={Colors.DarkColor}
          TextColor={Colors.WhiteColor}
          text={ButtonText.PreviousText}
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
