import {StyleSheet} from 'react-native';
import {Colors} from '../Constants/Colors';
export const Styles = StyleSheet.create({
  DoCenter: {justifyContent: 'center', alignItems: 'center'},
  DoLeft: {justifyContent: 'flex-start', alignItems: 'flex-end', margin: 15},
  ButtonDesign: {width: '95%', height: 60, marginBottom: 15, borderRadius: 10},
  TextPress: {color: Colors.DarkColor, fontSize: 16},
  TextHeader: {color: Colors.WhiteColor, fontSize: 20},
  BackgroundStyle: {
    padding: 0,
    flex: 1,
    backgroundColor: Colors.BackgrouColor,
  },
  TextInputField: {
    alignSelf: 'center',
    width: '95%',
    height: 56,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.WhiteColor,
    padding: 10,
  },
  Flex_05: {flex: 0.5},
  Padding_05: {padding: 10},
  JustConFlexStart: {justifyContent: 'flex-start'},
  AlFlexEnd: {alignSelf: 'flex-end'},
  DarkButtonText: {color: Colors.DarkColor},
  WhiteButtonText: {color: Colors.WhiteColor},
  SwipeContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '90%',
    height: 60,
    borderColor: Colors.DarkColor,
    borderWidth: 1,
  },
  SliderStyle: {width: 60, height: '100%', backgroundColor: Colors.DarkColor},
  ButtonOpacity05: {opacity: 0.5},
  ButtonOpacity1: {opacity: 1},
  SliderImage: {width: 40, height: 40},
  AlertMessageText: {
    color: Colors.GreyColor,
    fontSize: 18,
    position: 'absolute',
    top: 45,
  },
  AlertCloseButton: {
    position: 'absolute',
    width: '30%',
    height: 55,
    marginBottom: 10,
    bottom: 0,
    backgroundColor: Colors.DarkColor,
    borderRadius: 8,
  },
  AlertContainer: {
    width: '90%',
    height: '25%',
    backgroundColor: Colors.WhiteColor,
    borderRadius: 10,
  },
  AlertCloseText: {color: Colors.WhiteColor, fontSize: 16},
  OverlayContainer: {backgroundColor: Colors.Transparent, padding: 0},
});
