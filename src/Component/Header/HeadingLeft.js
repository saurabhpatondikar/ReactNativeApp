// @flow
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../Styles/StyleSheet';
type Props = {
  name: string,
};
const HeaderLeft = (props: Props) => {
  return (
    <View>
      <Text style={[styles.TextPress]}>{props.name}</Text>
    </View>
  );
};
export default HeaderLeft;
