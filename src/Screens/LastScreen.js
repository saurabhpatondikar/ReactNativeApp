// @flow
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import SimpleButton from '../Component/Buttons/Buttons';
import {ScreensName} from '../Constants/ScreenName';
import HeaderLeft from '../Component/Header/HeadingLeft';
import {Colors} from '../Constants/Colors';
import {ButtonText} from '../Constants/TextButtons';
import {Styles} from '../Styles/StyleSheet';

type Props = {
  name: string,
  addition: {name: string},
  navigation: any,
};
const LastScreen = (props: Props) => {
  return (
    <View style={[Styles.BackgroundStyle]}>
      <View style={[Styles.Flex_05, Styles.DoLeft]}>
        <HeaderLeft name={props.addition ? props.addition.name : ''} />
      </View>
      <View style={[Styles.Flex_05, Styles.DoCenter]}>
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.HomeScreen}
          color={Colors.DarkColor}
          TextColor={Colors.WhiteColor}
          text={ButtonText.HomeText}
          enable={false}
          opacity={1}
        />
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.AboutScreen}
          color={Colors.DarkColor}
          TextColor={Colors.WhiteColor}
          text={ButtonText.PreviousText}
          enable={false}
          opacity={1}
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
export default connect(mapStateToProps)(LastScreen);
