//@flow
import * as React from 'react';
import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import SimpleButton from '../Component/Buttons/Buttons';
import SwipeButton from '../Component/Buttons/SwipeButtons';
import {connect} from 'react-redux';
import {StoreAction} from '../Action/StoreAction';
import {ScreensName} from '../Constants/ScreenName';
import {Colors} from '../Constants/Colors';
import {ButtonText} from '../Constants/TextButtons';
import {styles} from '../Styles/StyleSheet';

type stateProp = {
  addition: {name: string},
};
type Props = {
  name: string,
  dispatch: any,
  addition: {name: string},
  navigation: any,
};
const Home = (props: Props) => {
  const [nameEnter, setNameEnter] = useState('');
  const handleTextChange = (text: string) => {
    props.dispatch(StoreAction({name: text}));
    setNameEnter(text);
  };
  return (
    <View style={[styles.BackgroundStyle]}>
      <View style={[styles.Flex_05, styles.JustConFlexStrt]}>
        <View style={[styles.AlFlexEnd]}>
          <Text style={[styles.TextPress]}>
            {props.addition ? props.addition.name : ''}
          </Text>
        </View>
        <TextInput
          value={nameEnter}
          style={[styles.TextInputField]}
          placeholder={ButtonText.PlaceHolderText}
          onChangeText={(text) => handleTextChange(text)}
          onBlur={() => setNameEnter('')}
        />
      </View>
      <View style={[styles.Flex_05, styles.Padding_05, styles.DoCenter]}>
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.AboutScreen}
          color={Colors.Transparent}
          TextColor={Colors.DarkColor}
          text={ButtonText.PressText}
        />
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.AboutScreen}
          color={Colors.GreyColor}
          TextColor={Colors.DarkColor}
          text={ButtonText.PressText}
        />
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.AboutScreen}
          color={Colors.DarkColor}
          TextColor={Colors.WhiteColor}
          text={ButtonText.PressText}
        />
        <SwipeButton
          title={ButtonText.SlideText}
          BackColor={Colors.Transparent}
          navigate={props.navigation}
          ScreenName={ScreensName.AboutScreen}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state: stateProp) => {
  const {addition} = state;
  return {
    addition: addition,
  };
};
export default connect(mapStateToProps)(Home);
