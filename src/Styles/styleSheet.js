import {StyleSheet} from 'react-native';
import {Colors} from '../Constants/Colors';
export const styles = StyleSheet.create({
  DoCenter: {justifyContent: 'center', alignItems: 'center'},
  DoLeft: {justifyContent: 'flex-start', alignItems: 'flex-end'},
  ButtonDesig: {width: '80%', height: 60, margin: 5, borderRadius: 10},
  TextPress: {color: Colors.DarkColor, fontSize: 16},
  BackgroundStyle: {
    padding: 10,
    flex: 1,
    backgroundColor: Colors.BackgrouColor,
  },
  TextInputField: {
    alignSelf: 'center',
    width: '70%',
    height: 56,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.WhiteColor,
  },
  Flex_05: {flex: 0.5},
  Padding_05: {padding: 5},
  JustConFlexStrt: {justifyContent: 'flex-start'},
  AlFlexEnd: {alignSelf: 'flex-end'},
});
