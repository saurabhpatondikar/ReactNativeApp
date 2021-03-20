// @flow
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Styles} from '../../Styles/StyleSheet';
type Props = {
  deviceName: string,
  alertClose: any,
};
const PopupAlert = (props: Props) => {
  return (
    <View style={[Styles.AlertContainer, Styles.DoCenter]}>
      <Text style={[Styles.AlertMessageText]}>
        {'Application Running on ' + props.deviceName + ' device'}
      </Text>
      <TouchableOpacity
        onPress={() => props.alertClose()}
        style={[Styles.DoCenter, Styles.AlertCloseButton]}>
        <Text style={[Styles.AlertCloseText]}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PopupAlert;
