//@flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, TextInput, Platform, NativeEventEmitter} from 'react-native';
import {Overlay} from 'react-native-elements';
import SimpleButton from '../Component/Buttons/Buttons';
import {connect} from 'react-redux';
import {StoreAction} from '../Action/StoreAction';
import {ScreensName} from '../Constants/ScreenName';
import {Colors} from '../Constants/Colors';
import {ButtonText} from '../Constants/TextButtons';
import {Styles} from '../Styles/StyleSheet';
import PopupAlert from '../Component/Alerts/PopupAlert';
const emitter = new NativeEventEmitter();
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
  const [enableButton, setEnableButton] = useState(true);
  const [buttonOpacity, setButtonOpacity] = useState(0.5);
  const [popupEnable, setPopupEnable] = useState(false);
  const [deviceName, setDeviceName] = useState('');
  useEffect(() => {
    if (Platform.OS === 'android') {
      emitter.addListener('DeviceCheck', (e) => {
        alertPopup(e.deviceType);
      });
    }
  }, []);
  const alertPopup = (text: string) => {
    setPopupEnable(true);
    setDeviceName(text);
  };
  const handleTextChange = (text: string) => {
    props.dispatch(StoreAction({name: text}));
    setNameEnter(text);
    setEnableButton(false);
    setButtonOpacity(1);
  };
  const popupClose = () => {
    setPopupEnable(!popupEnable);
  };
  return (
    <View style={[Styles.BackgroundStyle]}>
      <Overlay
        isVisible={popupEnable}
        fullScreen={true}
        overlayStyle={[Styles.DoCenter, Styles.OverlayContainer]}>
        <PopupAlert
          deviceName={deviceName}
          alertClose={popupClose.bind(this)}
        />
      </Overlay>
      <View style={[Styles.Flex_05, Styles.DoCenter]}>
        <TextInput
          value={nameEnter}
          style={[Styles.TextInputField]}
          placeholder={ButtonText.PlaceHolderText}
          onChangeText={(text) => handleTextChange(text)}
          onBlur={() => setNameEnter('')}
        />
      </View>
      <View style={[Styles.Flex_05, Styles.DoCenter]}>
        <SimpleButton
          navigate={props.navigation}
          ScreenName={ScreensName.AboutScreen}
          color={Colors.DarkColor}
          TextColor={Colors.WhiteColor}
          text={ButtonText.PressText}
          enable={nameEnter.length > 0 ? enableButton : true}
          opacity={nameEnter.length > 0 ? buttonOpacity : 0.5}
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
